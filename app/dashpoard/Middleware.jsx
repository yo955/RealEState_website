"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const Auth = createContext(null);
const Middleware = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter()
  const getUser = async () => {
    try {
      await axios
        .get(`${apiUrl}/user/me`,
          {
            withCredentials: true,
            headers:{
              "Authorization":`Bearer ${localStorage.getItem("jwt")}`
            }
          }
        )
        .then(async (res) => {
          setUser(await res?.data);
            // router.push("/dashpoard")
          
        });
    } catch (error) {
      setUser(null)
      router.push("/login")
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if(isLoading){
    return <div>...loading</div>
  }

  return <Auth.Provider value={{user,isLoading}}>{children}</Auth.Provider>;
};

export default Middleware;
