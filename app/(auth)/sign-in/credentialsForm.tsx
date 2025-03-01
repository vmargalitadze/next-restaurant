"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'
import { signinWithCredentials } from '@/lib/actions' 
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

import { useSearchParams } from 'next/navigation';

export const signInDefaultValues = {
  email: '',
  password: '',
};
function CredentialsForm() {
  const [data, action] = useActionState(signinWithCredentials, {
    success:false,
    message:''
  })
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/admin';
 

  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} className='w-full' variant='default'>
        {pending ? 'Signing In...' : 'Sign In'}
      </Button>
    );
  };

  return (
    <form action={action}>
    <input type='hidden' name='callbackUrl' value={callbackUrl} />
    <div className='space-y-6'>
      <div>
        <Label htmlFor='email'>Email</Label>
        <input
        className='flex h-[62px] w-full  bg-gray-800 px-6 py-2 text-white  focus-visible:outline-none focus-visible:right-1 focus-visible:ring-orange disabled:cursor-not-allowed disabled:opacity-50'
          id='email'
          name='email'
          type='email'
          required
          autoComplete='email'
          defaultValue={signInDefaultValues.email}
        />
      </div>
      <div>
        <Label htmlFor='password'>Password</Label>
        <input
         className='flex h-[62px] w-full  bg-gray-800 px-6 py-2 text-white  focus-visible:outline-none focus-visible:right-1 focus-visible:ring-orange disabled:cursor-not-allowed disabled:opacity-50'
          id='password'
          name='password'
          type='password'
          required
          autoComplete='password'
          defaultValue={signInDefaultValues.password}
        />
      </div>
      <div>
        <SignInButton />
      </div>

      {data && !data.success && (
        <div className='text-center text-destructive'>{data.message}</div>
      )}

      <div className='text-sm text-center text-muted-foreground'>
        Don&apos;t have an account?{' '}
        <Link href='/sign-up' target='_self' className='link'>
          Sign Up
        </Link>
      </div>
    </div>
  </form>
  )
}

export default CredentialsForm