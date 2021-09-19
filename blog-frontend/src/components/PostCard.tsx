import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

interface Snippet {
  title: string;
  author: string;
  excerpt: string;
  status:string;
  published: string;
  category?: string[];
  deletePost: (title:string)=>void
}

const PostCard : React.FC <Snippet> = ({title,author,excerpt,status,published,category, deletePost}) => {

  return (
    <div
      className="post-card"
    >
      <Link
        to={{
          pathname: `/posts/${title}`
        }}
      >
      <h1>{title}</h1>
      <h3>{status}</h3>
      <h4>{moment(published).format('MMMM Do YYYY, h:mm:ss a')}</h4>
      <small>Written by {author}</small>
      <p>{excerpt}</p>
      <small>Categories: {category}</small>
      </Link>
      <br/>
      <Link
        to={{
          pathname: `posts/:title/edit`
        }}
      >
        Edit
      </Link>
      <button onClick={()=>deletePost(title)}>Delete</button>
    </div>
  )
}

export default PostCard
