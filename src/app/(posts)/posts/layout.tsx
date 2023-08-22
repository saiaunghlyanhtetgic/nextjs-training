import { ChildrenProps } from '@/types/ChildrenProps'
import React from 'react'

const PostLayout = ({children} : ChildrenProps) => {
  return (
    <div className='min-h-screen bg-slate-600 flex '>
        {children}
    </div>
  )
}

export default PostLayout