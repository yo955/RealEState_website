"use client";
import axios from "axios";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { PiCodaLogo } from "react-icons/pi";

export const Auth = createContext(null);
const Middleware = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const userStorage = localStorage.getItem("username");
  const passStorage = localStorage.getItem("password");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  const getUser = async () => {
    try {
      await axios
        .post(
          `${apiUrl}/user/login`,
          { username: userStorage, password: passStorage },
          {
            withCredentials: true,
          }
        )
        .then(async (res) => {
          if (await res?.data) {
            setUser(await res.data);
          }
        });
    } catch (error) {
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return <div>...loading</div>;
  }
  if (!user?._id) {
    redirect("/login");
  }
  return <Auth.Provider value={user}>{children}</Auth.Provider>;
};

export default Middleware;