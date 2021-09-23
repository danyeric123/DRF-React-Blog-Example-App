import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getPost, Post } from '../services/blogServices'
import moment from 'moment'

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
      <small>By {post?.username}</small>
      <p>{post?.content}</p>
      <small>Publication Date: {moment(post?.published).format('MMMM Do YYYY, h:mm:ss a')}</small>
      {post?.category&& <small>Categories: {post?.category.map(cat=>cat+",")}</small> }
    </>
  )
}

export default PostDetails
