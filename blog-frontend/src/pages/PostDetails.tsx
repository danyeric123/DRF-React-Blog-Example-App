import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getPost, Post } from '../services/blogServices'

type params = {
  title: string
}

const PostDetails = () => {
  const {title} = useParams<params>()
  const [post, setPost] = useState<Post>()

  useEffect(()=>{
    const fetchPost = async ()=>{
      const fetchedPost = await getPost(title)
      setPost(fetchedPost)
    }
    fetchPost()
  },[title])
  return (
    <>
      <h1>{post?.title}</h1>
      <small>By {post?.author}</small>
      <p>{post?.content}</p>
      <small>Publication Date: {post?.published}</small>
      <small>Categories: {post?.category.map(cat=>cat+",")}</small>
    </>
  )
}

export default PostDetails
