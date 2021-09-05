import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { signUp } from '../services/userService'

const SignUp = () => {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirm,setConfirm] = useState('')
  const history = useHistory()


  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault()
    signUp(username,email,password)
    history.push('/')
  }

  return (
    <>
     <form
      onSubmit={handleSubmit}
     >
       <label htmlFor="username">
         Username
       </label>
       <input 
        type="text" 
        name="username" 
        id="" 
        value={username}
        onChange={e=>setUsername(e.target.value)}
        required
        />
        <label htmlFor="email">
          Email
        </label>
        <input 
          type="email" 
          name="email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          id="" 
        />
        <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={e=>setPassword(e.target.value)}
            required
            placeholder="Strong password"
          />
          <label htmlFor="confirm">
            Confirm Password
          </label>
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={confirm}
            name="confirm"
            onChange={e=>setConfirm(e.target.value)}
            required
            placeholder="Confirm password"
          />
          <button
            disabled={!(username && email && password === confirm)}
          >
            Sign Up
          </button>
          <Link to="/">
            <button className="group relative w-full flex justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Cancel
            </button>
          </Link>
     </form> 
    </>
  )
}

export default SignUp
