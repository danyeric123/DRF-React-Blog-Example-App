const BASE_URL = 'http://127.0.0.1:8000/api/'

export interface Post {
  id: number;
  title: string;
  author: number;
  excerpt: string;
  content: string;
  status:string;
  published: string;
  category: number
}

export const getAllPosts = async () : Promise<Post[]> => {
  return fetch(BASE_URL)
                .then(res=>res.json())
}