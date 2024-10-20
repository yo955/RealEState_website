"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500, 
      delay: 200,
    });
  }, []);

  return <>{children}</>;
};

export default AosWrapper;
