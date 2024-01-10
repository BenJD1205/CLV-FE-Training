'use client';
import Link from 'next/link';
import React, {useState} from 'react'
import Button from '@/app/components/button/Button';
import Input from '@/app/components/input/Input';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import styles from '../auth.module.css';

type Props = {}

const Register = (props: Props) => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className='flex items-center justify-center w-[30%] h-[100%]'>
      <div className={`${styles.card}`}>
        <h1 className='text-2xl font-bold'>Create Account</h1>
        <p className='text-[#cccccc]'>Create your account</p>
        <form className='w-[100%] flex flex-col gap-3'>
          <Input label='Email' name='email' type='text' />
          <Input label='Username' name='username' type='text' />
          <Input label='Password' name='password' type={showPassword ? 'text' : 'password'} endAppend={
            <div className='absolute top-2 right-2 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiOutlineEye size={25} /> : <AiOutlineEyeInvisible size={25} /> }
            </div>
          } />
          <Input label='Confirm Password' name='confirmPassword' type='password' endAppend={
            <div className='absolute top-2 right-2 cursor-pointer' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <AiOutlineEye size={25} /> : <AiOutlineEyeInvisible size={25} /> }
            </div>
          } />
          <Button type="submit" className='bg-blue-500 rounded text-[#ffffff] font-400 p-2'>Sign Up</Button>
        </form>
        <p className='text-gray-700 text-[14px]'>Already have an account?<Link href='/login' className='text-blue-600 cursor-pointer'> Sign In</Link></p>
      </div>
    </div>
  )
}

export default Register