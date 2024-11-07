import "@/app/ui/dashpoard-globals.css"
import styles from "../ui/dashpoard/dashboard.module.css";
import Sidebar from "../ui/dashpoard/sidebar/Sidebar";
import Navbar from "../ui/dashpoard/navbar/Navbar";
import Footer from "../ui/dashpoard/footer/Footer";
const layout = ({ children }) => {
  return (
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
  );
};

export default layout;
