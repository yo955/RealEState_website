"use client";

import { useContext, useEffect } from "react";
import { Auth } from "./Middleware";
import { useRouter } from "next/navigation";

const Context = ({ children }) => {
  const { user, isLoading } = useContext(Auth);
  const router = useRouter();

  if (isLoading) {
    return <div>...loading</div>;
  }

  useEffect(() => {
    if (!user?._id) {
      router.push("/login");
    }
  }, [user, router]); // يضمن أن `router.push` يحدث فقط عندما تتغير `user`

  return <div>{children}</div>;
};

export default Context;
