"use client"
import axios from 'axios'
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'


export const Auth = createContext(null)
const Middleware = ({children}) => {
    const [user,setUser] = useState(null)

    const [isLoading , setIsloading] = useState(true)
const getUser  = async ()=>{
    try {
        await axios.get("https://real-state-liard.vercel.app/user/me",{
            withCredentials:true,
        }).then(async(res)=>{
           
            if(await res?.data){
                setUser(await res.data)  
            }
            
        })
         
    } catch (error) {
        console.log(error.message)
    }finally{
        setIsloading(false)
    }
}

useEffect(() => {
    getUser()
}, [])


if(isLoading){
    return <div>...loading</div>
}
if(!user?._id){
    redirect("/login")
}
  return (
    <Auth.Provider value={user}>{children}</Auth.Provider>
  )
}

export default Middleware