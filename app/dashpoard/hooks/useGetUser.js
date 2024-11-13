import axios from 'axios'
import React from 'react'

const useGetUser = () => {
    const getUser = async ()=>{
        try {
   const {data} = await axios.get("https://real-state-liard.vercel.app/user/me",{
    withCredentials:true
   }) 
              
        } catch (error) {
          
        }
    }
  return {getUser}
}

export default useGetUser