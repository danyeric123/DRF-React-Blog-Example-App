import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { login } from '../services/userService'

interface LoginProps{
  setUser: (user:string)=>null
}

const Login : React.FC = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const history = useHistory()


  const handleSubmit = async (e : React.FormEvent) =>{
    e.preventDefault()
    try{
      await login(username,password)
      history.push('/')
    } catch(err){
      console.log(err)
      alert('Invalid Credentials')
    }
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
          value={username}
          required
          placeholder="Username"
          onChange={e=>setUsername(e.target.value)}
        />
        <label htmlFor="password">
          Password
        </label>
        <input 
          type="password" 
          value={password}
          required
          placeholder="Password"
          onChange={e=>setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </>
  )
}

export default Login
