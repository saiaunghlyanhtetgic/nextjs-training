import React from 'react'
import { PostType } from '@/types/PostType';

export const dynamic = "force-dynamic";

export interface PostPageProps {
    params : {
        id : string
    }
}

async function SinglePost({params} : PostPageProps) {
    const postResponse = await fetch(`http://localhost:3001/posts/${params.id}`);
    const post = (await postResponse.json()) as PostType;
    
  return (
    <div className='p-4'>
        <h1>{post.title}</h1>
        <p>{post.body}</p>

    </div>
  )
}

export default SinglePost