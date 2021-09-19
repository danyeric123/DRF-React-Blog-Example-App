import { axiosInstance } from "./authServices"

const BASE_URL = 'http://127.0.0.1:8000/api/posts'

export interface Post {
  id?: number;
  title: string;
  author: string;
  excerpt: string;
  content: string;
  status:string;
  published: string;
  category: string[]
}

export const getAllPosts = async () : Promise<Post[]> => {
  return fetch(BASE_URL)
                .then(res=>res.json())
}

export const createPost = async (newPost : Post) => {
  axiosInstance.post('/posts', newPost)
}