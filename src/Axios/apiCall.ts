import axioz from 'axios';

export const sendMessage = async(body:any)=>{
    try{
      const response = await axioz.post("http://localhost:3040/contact", body,{
        headers: {
            "Content-Type" : "application/json"
        }
      })
    return response
    }catch(error:any){
      return error.response
    }
}