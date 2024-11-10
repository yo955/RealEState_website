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
  const [loading, setLoading] = useState(false); // For loading state

  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      // Perform login
      const res = await axios.post(
        `${apiUrl}/user/login`,
        { username, password },
        { withCredentials: true }
      );

      const user = res.data;
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect to dashboard
      router.push("/dashboard"); // Fixed typo

      // Fetch user details (optional)
      // const userRes = await axios.get(`${apiUrl}/user/me`);
      // console.log(userRes.data);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false); // Stop loading
    }
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
