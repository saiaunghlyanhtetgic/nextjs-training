import { ChildrenProps } from '@/types/ChildrenProps'
import React from 'react'

const HomeLayout = ({
    children,
  }: ChildrenProps) => {
  return (
    <div className='bg-slate-600 p-4'>{children}</div>
  )
}

export default HomeLayout