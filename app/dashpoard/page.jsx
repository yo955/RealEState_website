import Card from "../ui/dashpoard/card/Card";
import Chart from "../ui/dashpoard/chart/Chart";
import styles from "@/app/ui/dashpoard/dashboard.module.css";
import Righbar from "../ui/dashpoard/rightbar//Rightbar";
import Transactions from "../ui/dashpoard/transactions/Transactions";
import ProtectedComponent from "@/ProtectedRoute";
const Dashboard = () => {
  return (
    <ProtectedComponent>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.Cards}>
            <Card />
            <Card />
            <Card />
          </div>
          <Transactions />
          <Chart />
        </div>
        <div className={styles.side}>
          <Righbar />
        </div>
      </div>
    </ProtectedComponent>
  );
};

export default Dashboard;
