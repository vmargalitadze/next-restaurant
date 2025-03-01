"use server"

import { prisma } from "@/components/db/prisma";

import { revalidatePath } from "next/cache";
import { bookingSchema, signInFormSchema } from "./validator";
import { isRedirectError } from "next/dist/client/components/redirect-error"
import { formatError } from "./utils";
import { signIn, signOut } from "@/auth";

const PAGE_SIZE = 5
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  export async function createBooking(data: any) {
    try {
      // Validate input data using Zod schema
      const validatedData = bookingSchema.parse(data);
  
      // Save booking to the database using Prisma
      const booking = await prisma.booking.create({
        data: validatedData,
      });
      revalidatePath('/')
      return {
        success: true,
        message: "Booking created successfully!",
        booking,
      };
    } catch (error) {
      if (isRedirectError(error)) throw error;
  
      return {
        success: false,
        message: formatError(error),
      };
    }
  }

  export async function deleteBooking(id:string) {
    try {
      await prisma.booking.delete({
        where:{id}
      })
    
      revalidatePath('/admin/orders')
      return {
        success: true,
        message: 'deleted',
      };
    } catch (error) {
      return {
        success: false,
        message: formatError(error),
      };
    }
    }

  export async function getAllBooking({
    limit = PAGE_SIZE,
    page
  
  } : {limit?:number, page:number} ) {
    const data = await prisma.booking.findMany({
      orderBy:{createdAt:'desc'},
      take:limit,
      skip: (page - 1) * limit,
     
    })
  
  const dataCount = await prisma.booking.count()
  
  return {
    data,
    totalPages:Math.ceil(dataCount / limit)
  }
  }

  export async function signinWithCredentials(
    prevState: unknown,
    formData: FormData
  ) {
    try {
      const user = signInFormSchema.parse({
        email: formData.get('email'),
        password: formData.get('password'),
      });
  
      await signIn('credentials', user);
  
      return { success: true, message: 'Signed in successfully' };
    } catch (error) {
      if (isRedirectError(error)) {
        throw error;
      }
      return { success: false, message: 'Invalid email or password' };
    }
  }



export async function signOutUser() {
    await signOut()
}
