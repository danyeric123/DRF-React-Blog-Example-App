import React from 'react'

interface Snippet {
  title: string;
  author: string;
  excerpt: string;
  status:string;
  published: string;
  category: string[]
}

const PostCard : React.FC <Snippet> = ({title,author,excerpt,status,published,category}) => {
  
  return (
    <div
      className="post-card"
    >
      <h1>{title}</h1>
      <h3>{status}</h3>
      <small>{published}</small>
      <small>Written by {author}</small>
      <p>{excerpt}</p>
      <small>Categories: {category}</small>

    </div>
  )
}

export default PostCard
