"use client";
import styles from "@/app/ui/login/login.module.css";
import "@/app/ui/dashpoard-globals.css";
import { useContext, useState } from "react";
import { redirect, useRouter } from "next/navigation";

const LoginPage = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState(null);
  const [loading, setLoading] = useState(false); // For loading state

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    router.push("/dashpoard")
    
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
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
