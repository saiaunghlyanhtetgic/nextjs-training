import { PostType } from '@/types/PostType';
import Link from 'next/link';
import React from 'react'


async function Posts () {
    const postResponse = await fetch("http://localhost:3001/posts", {
        cache : "no-cache"
    })
    const posts = await postResponse.json() as [PostType];
  return (
    <div className='text-slate-200 p-4'>
        {posts && posts.map(post => {
            return <li key={post.id}>
                <Link href={`/posts/${post.id}`}>
                    <span>{post.title}</span>
                </Link>
            </li>
        })}
    </div>
  )
}

export default Posts