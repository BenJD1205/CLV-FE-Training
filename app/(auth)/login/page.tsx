'use client'
import React, {useState} from 'react'
import Link from 'next/link';
import { signIn } from "next-auth/react";
import {AiOutlineGoogle, AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import styles from '../auth.module.css';

type Props = {}

const Login = (props: Props) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='flex items-center justify-center w-[30%] h-[100%]'>
      <div className={`${styles.card}`}>
        <h1 className='text-2xl font-bold'>Welcome Back</h1>
        <p className='text-[#cccccc]'>Welcome back! please enter your detail</p>
        <form className='w-[100%] flex flex-col gap-3'>
          <Input label='Email' name='email' type='text' />
          <Input label='Password' name='password' type={showPassword ? 'text' : 'password'} endAppend={
            <div className='absolute top-2 right-2 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiOutlineEye size={25} /> : <AiOutlineEyeInvisible size={25} /> }
            </div>
          } />
          <div className='flex justify-between'>
            <div className="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <Link href='' className='text-[14px] text-blue-600'>
              Forgot Password
            </Link>
          </div>
          <Button type="submit" className='bg-blue-500 rounded text-[#ffffff] font-400 p-2'>Sign In</Button>
          <Button type="button" className='rounded text-[#000000] font-400 p-2 flex items-center justify-center gap-2 border-solid border-2 border-neutral-700' onSubmit={() => signIn("google")}><AiOutlineGoogle /> Google</Button>
        </form>
        <p className='text-gray-700 text-[14px]'>Don&apos;t have an account?<Link href='/register' className='text-blue-600 cursor-pointer'> Sign up</Link></p>
      </div>
    </div>
  )
}

export default Login