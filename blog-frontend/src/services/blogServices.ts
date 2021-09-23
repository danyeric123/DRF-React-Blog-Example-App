import { axiosInstance } from "./authServices"

const BASE_URL = 'http://127.0.0.1:8000/api/posts/'

export interface Post {
  id?: number;
  title: string;
  username: string;
  excerpt: string;
  content: string;
  status:string;
  slug?: string
  published: string;
  category?: string[]
}

export const getAllPosts = async () : Promise<Post[]> => {
  return fetch(BASE_URL)
                .then(res=>res.json())
}

export const createPost = async (newPost : Post) => {
  axiosInstance.post('/posts/', newPost)
}

export const getPost = async (slug : string) : Promise<Post>  => {
  return axiosInstance.get(`/posts/${slug}`).then(res=>res.data)
}

export const removePost = async (title: string) =>{
  axiosInstance.delete(`/posts/${title}`)
}