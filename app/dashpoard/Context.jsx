"use client";

import { useContext, useEffect } from "react";
import { Auth } from "./Middleware";
import { redirect, useRouter } from "next/navigation";

const Context = ({ children }) => {
  const {user,isLoading} = useContext(Auth)
  
  const router = useRouter()
  if(isLoading){
    return <div>...loading</div>
  }
// useEffect(() => {
// }, [user])
  if(!user?._id){
    
    // router.push("/login")
   }

  return <div>{children}</div>;
};


export default Context;



