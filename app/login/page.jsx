"use client";
import styles from "@/app/ui/login/login.module.css";
import "@/app/ui/dashpoard-globals.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post(`${apiUrl}/user/login`, { username, password })
      .then((res) => {
        const user = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/dashpoard");
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Login failed");
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.form}>
        <h1>Login</h1>
        {error && <p className="text-red-500 text-xl text-center">{error}</p>}
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
