import "@/app/ui/dashpoard-globals.css"
import styles from "@/app/ui/dashpoard/dashboard.module.css"
import Sidebar from "../ui/dashpoard/sidebar/Sidebar";
import Navbar from "../ui/dashpoard/navbar/Navbar";
import Footer from "../ui/dashpoard/footer/Footer";
import Context from "./Context";
import Middleware from "./Middleware";
const Layout = ({ children }) => {
 
  return (
    <>
    <Middleware>
      <Context>
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
      </Context>
    </Middleware>
     
    </>
   
  );
};

export default Layout;
