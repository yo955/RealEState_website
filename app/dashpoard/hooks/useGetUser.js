import axios from 'axios'
import React from 'react'

const useGetUser = () => {
    const getUser = async ()=>{
        try {
   const {data} = await axios.get("https://real-state-liard.vercel.app/user/me",{
    withCredentials:true
   }) 
                console.log(data)
        } catch (error) {
            console.log(error.message)
        }
    }
  return {getUser}
}

export default useGetUser