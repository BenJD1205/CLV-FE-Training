import React, {FC} from 'react'

type Props = {
  label:string,
  name:string,
  type:string,
  value?:string,
  startAppend?:React.ReactNode,
  endAppend?:React.ReactNode,
}

const Input:FC<Props> = ({
  label,
  name,
  type,
  value,
  startAppend,
  endAppend,
  ...props
}) => {
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-[16px] font-500 text-[#ccc]'>{label}</label>
      <div className='flex border-2 border-slate-500 border-solid rounded relative'>
        {startAppend && <>{startAppend}</>}
        <input type={type} {...props} className='border-none w-[100%] outline-none p-2 rounded'  />
        {endAppend && <>{endAppend}</>}
      </div>
    </div>
  )
}

export default Input