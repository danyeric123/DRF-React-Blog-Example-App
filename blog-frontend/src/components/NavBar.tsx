import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

interface NavProps{
  logOut: ()=>void
  user: string
}

const NavBar : React.FC<NavProps> = ({logOut, user}) => {
  const history = useHistory()

  return (
    <nav>
      {!user?
      <ul>
      <li>
      <Link to="/">
        All Posts
      </Link>
      </li>
      <li>
      <Link
        to="/login"
      >
        Login
      </Link>
      </li>
      <li>
      <Link
        to="/signup"
      >
        Sign Up
      </Link>
      </li>
      <li>
      <div
        onClick={()=>{
          logOut()
          history.push('/login');
        }}
      >Logout</div>
      </li>
      </ul>:
      <ul>
      <li>
        <Link to="/">
          All Posts
        </Link>
      </li>
      <li>
        <div
          onClick={()=>{
            logOut()
            history.push('/login');
          }}
        >Logout</div>
      </li>
      </ul>}
    </nav>
  )
}

export default NavBar
