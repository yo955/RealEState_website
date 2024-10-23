"use client";
import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
const ThemeToggle = () => {
  const [darkMode, SetDarkMode] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") SetDarkMode(true);
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div className="relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1">
      <FaMoon />
    </div>
  );
};

export default ThemeToggle;
