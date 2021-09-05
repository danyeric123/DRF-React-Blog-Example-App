import { axiosInstance } from "./authServices"


export const login = (username : string, password : string) => {
  axiosInstance.post('token/',{
    username,
    password
  }).then((res) => {
    localStorage.setItem('access_token', res.data.access);
    localStorage.setItem('refresh_token', res.data.refresh);
    axiosInstance.defaults.headers['Authorization'] =
      'JWT ' + localStorage.getItem('access_token');
  })
}

export const signUp = (username : string, email : string, password : string)=>{
  axiosInstance.post('user/create/',{
    username,
    email,
    password
  }).then(()=>{})
}