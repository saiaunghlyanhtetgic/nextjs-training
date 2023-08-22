'use client'
import React from 'react'
import { useParams} from "next/navigation"

const User = () => {
    const params = useParams()
  return (
    <div>User by Id {params.id}</div>
  )
}

export default User