import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import './App.css';
import Login from './components/Login';
import PostCard from './components/PostCard';
import {BrowserRouter as Router} from 'react-router-dom'
import { getAllPosts, Post, removePost } from './services/blogServices';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import { axiosInstance } from './services/authServices';
import PostForm from './components/PostForm';
import PostDetails from './pages/PostDetails';
import EditPost from './pages/EditPost';
// import {getUserFromToken } from './services/userService'

const App : React.FC = () => {
  const [posts,setPosts] = useState<Post[]>()
  const [isLoading,setIsLoading] = useState(true)
  const [user, setUser] = useState('')

  useEffect(()=>{
    async function getPosts(){
      const newPosts = await getAllPosts()
      setPosts(newPosts)
      setIsLoading(false)
    }
    getPosts()
  },[])

  const logOut = ()=>{
    axiosInstance.post('user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
  }

  const deletePost = (title: string)=>{
    removePost(title)
    const newPosts = posts?.filter(post=>post.title===title)
    setPosts(newPosts)
  }
  
  return (
    <>
      <Router>
        <NavBar
          logOut={logOut}
          user={user}
        />
        <Route exact path='/'>
          {isLoading?
            "Loading....":
            posts?.map(post=>(
              <PostCard 
                key={post.id}
                title={post.title}
                author={post.username}
                excerpt={post.excerpt}
                status={post.status}
                published={post.published}
                category={post.category}
                deletePost={deletePost}
                user={user}
              />
            ))
          } 
        </Route>
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/create">
          <PostForm user={user} />
        </Route>
        <Route exact path="/posts/:title">
          <PostDetails />
        </Route>
        
      </Router>
    </>
  );
}

export default App;
