import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import { Post } from '../services/blogServices'

interface PostCardProps extends Post {
  deletePost: (title:string)=>void
  user: string
}

const PostCard : React.FC <PostCardProps> = ({title, slug,content,username,excerpt,status,published,category, deletePost, user}) => {

  return (
    <div
      className="post-card"
    >
      <Link
        to={{
          pathname: `/posts/${slug}`
        }}
      >
      <h1>{title}</h1>
      <h3>{status}</h3>
      <h4>{moment(published).format('MMMM Do YYYY, h:mm:ss a')}</h4>
      <small>Written by {username}</small>
      <p>{excerpt}</p>
      <small>Categories: {category}</small>
      </Link>
      <br/>
      {username===user&&(
      <>
      <Link
        to={{
          pathname: `posts/${slug}/edit`,
          state: {title,status,published,content}
        }}
      >
        Edit
      </Link>
      <button onClick={()=>deletePost(title)}>Delete</button>
      </>)
      }
    </div>
  )
}

export default PostCard
