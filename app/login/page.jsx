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
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // بدء التحميل

    try {
      // طلب تسجيل الدخول
      // const res = await axios.post(
      //   `${apiUrl}/user/login`,
      //   { username, password },
      //   { withCredentials: true }
      // );

      // const user = res.data;

      // توجيه المستخدم إلى لوحة التحكم
      // تصحيح اسم المسار

      // جلب بيانات المستخدم
      const userRes = await axios.get(`${apiUrl}/user/me`, {
        withCredentials: true,
      });
      router.push("/dashpoard");
      localStorage.setItem("user", JSON.stringify(user));
      console.log(userRes.data);
    } catch (err) {
      setError(err.response?.data?.message || "فشل تسجيل الدخول");
    } finally {
      setLoading(false); // إيقاف التحميل
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.form}>
        <h1>تسجيل الدخول</h1>
        {error && <p className="text-red-500 text-xl text-center">{error}</p>}
        <input
          type="text"
          placeholder="اسم المستخدم"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
