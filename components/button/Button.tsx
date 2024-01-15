import React, {FC} from 'react'

type Props = {
  type:any,
  children:React.ReactNode,
  onSubmit?:() => void,
  className?:string,
}

const Button:FC<Props> = ({
  type ="button",
  children,
  onSubmit,
  className,
  ...props
}) => {
  return (
    <button type={type} className={className} {...props}>{children}</button>
  )
}

export default Button