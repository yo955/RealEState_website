"use client";
import styles from "@/app/ui/login/login.module.css";
import "@/app/ui/dashpoard-globals.css";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Auth } from "../dashpoard/middleware/Middleware";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // For loading state
  const router = useRouter();

  // const { user } = useContext(Auth);

  // Redirect user to dashboard if already logged in
  // if (user?._id) {
  //   router.push("/dashpoard");
  // }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await axios
        .post("https://real-state-liard.vercel.app/user/login", {
          username,
          password,
        }, {
          withCredentials: true,
        })
        .then(async (res) => {
          if (res.data.token) {
            localStorage.setItem("jwt", res.data.token);
          }
          router.push("/dashpoard");
        })
        .catch((error) => {
          setError(error?.response?.data?.error || "Something went wrong!");
        });
    } catch (error) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
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
          {loading ? (
            <div className={styles.spinner}></div> // Display spinner while loading
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
