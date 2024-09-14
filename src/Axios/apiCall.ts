import axios from 'axios';

export const sendMessage = async(body:any)=>{
    try{
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || `https://edidiong-benn-portfolio.vercel.app`;
      console.log(API_BASE_URL)
      const response = await axios.post(`${API_BASE_URL}/api/contact`, body,{
        headers: {
            "Content-Type" : "application/json"
        }
      })
    return response
    }catch(error:any){
      return error.response
    }
}