"use client";
import "@/app/ui/dashpoard-globals.css";
import styles from "@/app/ui/dashpoard/dashboard.module.css";
import Sidebar from "../ui/dashpoard/sidebar/Sidebar";
import Navbar from "../ui/dashpoard/navbar/Navbar";
import Footer from "../ui/dashpoard/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const router = useRouter();
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  if (!token) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default Layout;
