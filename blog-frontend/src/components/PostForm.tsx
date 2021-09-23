import { userInfo } from 'os'
import React, { FC, useState } from 'react'
import { useHistory } from 'react-router'
import { createPost, Post } from '../services/blogServices'

enum Status {
  DRAFT = 'draft',
  PUBLISHED = 'published'
}

interface Props {
  user: string,
  addPost: (post:Post)=>void
}

const PostForm : FC<Props> = ({user,addPost}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState(Status.DRAFT)
  const [published, setPublished] = useState('')
  const [category, setCategory] = useState<string[]>()
  const history = useHistory()
  
  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault()
    let post = {
      title, 
      content,
      status,
      username:user, 
      excerpt: content.split(' ').slice(0,3).join(' '),
      published,
      slug: slugiy(title),
      category
    }
    addPost(post)
    history.push('/')
  }

  const slugiy = (string: string) : string =>{
    return string
			.toString()
			.toLowerCase()
			.replace(/\s+/g, '-') // Replace spaces with -
			.replace(/&/g, '-and-') // Replace & with 'and'
			.replace(/[^\w-]+/g, '') // Remove all non-word characters
			.replace(/--+/g, '-') // Replace multiple - with single -
			.replace(/^-+/, '') // Trim - from start of text
			.replace(/-+$/, ''); // Trim - from end of text
  }

  return (
    <>
      <form 
        onSubmit={(e)=>handleSubmit(e)}
      >
        <label htmlFor="title">Title</label>
        <input type="text"
          name='title'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <label htmlFor="content">Content</label>
        <textarea
          name='content'
          value={content}
          onChange={(e)=>setContent(e.target.value)}
        />
        <label htmlFor="status">Publish?</label>
        <input type="checkbox" name="status" checked={Status.PUBLISHED===status?true:false}
        onChange={e=>e.target.checked?setStatus(Status.PUBLISHED):setStatus(Status.DRAFT)} 
        />
        <input type="datetime-local" name="published" onChange={(e)=>setPublished(e.target.value)} />
        <input type="text" name="category" placeholder="Put categories separated by semicolon" onChange={e=>setCategory(e.target.value.split(";"))} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default PostForm
