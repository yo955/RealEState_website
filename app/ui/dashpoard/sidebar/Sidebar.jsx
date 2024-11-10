"use client";
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/MenuLink";
import Image from "next/image";
import Link from "next/link";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const menuItems = [
  {
    title: "pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashpoard",
        icon: <MdDashboard />,
      },
      {
        title: "users",
        path: "/dashpoard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "products",
        path: "/dashpoard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  const router = useRouter();
  const [user, setUser] = useState("");
  useEffect(() => {
    const checkUser = localStorage.getItem("user");
    if (checkUser) {
      setUser(JSON.parse(checkUser));
    }else{
      router.push("/login")
    }
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt="userImage"
          height={50}
          width={50}
        />
        <div className={styles.userDetails}>
          <span className={styles.username}>userName: {user.username}</span>
          <span className={styles.userTitle}>Rule: {user.rule}</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => {
          return (
            <li key={cat.title}>
              <span className={styles.cat}>{cat.title}</span>
              {cat.list.map((item) => {
                return <MenuLink key={item.title} item={item} />;
              })}
            </li>
          );
        })}
      </ul>
      <Link href="/login">
        <div className={styles.logout}>
          <MdLogout />
          Logout
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
