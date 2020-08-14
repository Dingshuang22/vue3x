import axios from 'axios'
import baseUrl from './baseUrl'

if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = baseUrl;} 
else if (process.env.NODE_ENV == 'debug') {    
    axios.defaults.baseURL = 'baseUrl';
} 
else if (process.env.NODE_ENV == 'production') {    
    axios.defaults.baseURL = 'baseUrl';
}

axios.defaults.timeout = 5000;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charest=UTF-8';

 /**
  * 请求拦截
  */
 axios.interceptors.request.use(config=>{
     const authorization = '';
     authorization && (config.headers.Authorization = authorization)

     return config
 },error=>{
     return Promise.error(error)
 })

 /**
  * 响应拦截
  */
 axios.interceptors.response.use(response=>{
     if(response.status == 200){
         return response
     }else{
         return Promise.reject(response.error)
     }
 },error=>{
     return Promise.reject(error)
 })

 export default axios