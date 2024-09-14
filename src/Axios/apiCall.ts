import axioz from 'axios';

export const sendMessage = async(body:any)=>{
    try{
      const response = await axioz.post("https://edidiong-benn-portfolio.vercel.app/contact", body,{
        headers: {
            "Content-Type" : "application/json"
        }
      })
    return response
    }catch(error:any){
      return error.response
    }
}