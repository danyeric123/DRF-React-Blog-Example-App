import React, { useState } from 'react'

enum Status {
  DRAFT = 'draft',
  PUBLISHED = 'published'
}

const PostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState(Status.DRAFT)
  const [published, setPublished] = useState<Date>()
  
  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault()

  }

  return (
    <>
      <form 
        onSubmit={handleSubmit}
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
      </form>
    </>
  )
}

export default PostForm
