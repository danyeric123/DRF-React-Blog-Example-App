import React from 'react'

interface Snippet {
  title: string;
  author: number;
  excerpt: string;
  status:string;
  published: string;
  category: number
}

const PostCard : React.FC <Snippet> = ({title,author,excerpt,status,published,category}) => {
  
  return (
    <div
      className="post-card"
    >
      <h1>{title}</h1>
      <h3>{status}</h3>
      <small>{published}</small>
      <p>{excerpt}</p>

    </div>
  )
}

export default PostCard
