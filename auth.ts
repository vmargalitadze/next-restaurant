import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/components/db/prisma';
import { compareSync } from 'bcrypt-ts-edge';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const config = {
    pages: {
        signIn: '/signIn',
        error: '/signIn',
    },

    providers: [
        CredentialsProvider({
            credentials: {
                email: { type: 'email' },
                password: { type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials) return null;

                const user = await prisma.user.findFirst({
                    where: { email: credentials.email as string },
                });

                if (user && user.password) {
                    const isMatch = compareSync(credentials.password as string, user.password);
                    if (isMatch) {
                        // Store role in cookies
                        (await
                            // Store role in cookies
                            cookies()).set('userRole', user.role, {
                            httpOnly: true,
                            secure: process.env.NODE_ENV === 'production',
                            path: '/',
                            sameSite: 'strict', // Fix: Lowercase 'strict'
                        });

                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            role: user.role,
                        };
                    }
                }
                return null;
            },
        }),
    ],
    callbacks: {
   
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async session({ session, token }: any) {
            session.user.id = token.sub;
            session.user.role = token.role;
            session.user.name = token.name;
            return session;
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async jwt({ token, user } : any) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async authorized({ request } : any) {
            const { pathname } = request.nextUrl;
            const protectedPaths = [/\/admin/];

            // Retrieve user role from cookies
            const userRole = (await cookies()).get('userRole')?.value; // Fix: No await needed

            // Block access to /admin if not an admin
            if (protectedPaths.some((p) => p.test(pathname)) && userRole !== 'admin') {
                return NextResponse.redirect(new URL('/signIn', request.url));
            }

            return true;
        },
    },
};

export const {handlers, signIn, auth, signOut } = NextAuth(config);
