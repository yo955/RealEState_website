"use client"
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import AosWrapper from "../lib/ScrollAnimation";
import Card from "./FeaturedCard";
import Link from "next/link";

const Featured = () => {
  const [products, setProducts] = useState([]);

  // جلب البيانات من ملف JSON محلي باستخدام Axios
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/data/products.json"); // مسار ملف JSON في مجلد public
        setProducts(response.data.slice(0, 3)); // اجلب 3 كروت فقط
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };
    fetchProducts();
  }, []);

  const CardJsx = products.map((item) => {
    return (
      <AosWrapper key={item.id}>
        <div data-aos="zoom-in">
          <Card
            status={item.status}
            imageUrl={item.imageUrl}
            location={item.location}
            projectName={item.projectName}
            projectNumber={item.projectNumber}
          />
        </div>
      </AosWrapper>
    );
  });

  return (
    <section className="mt-16 pb-12">
      <div className="header flex items-center justify-between container mb-10">
        <h1 className=" text-black text-3xl font-bold dark:text-white">
          مشاريعنا
        </h1>
        <Link href="/projects">
          <h1 className=" text-black text-2xl from-neutral-400 border-b-2 border-black cursor-pointer flex items-center  dark:text-white">
            جميع المشاريع <FaArrowLeft className="m-1" />
          </h1>
        </Link>
      </div>
      <div className="cards grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 container">
        {CardJsx}
      </div>
    </section>
  );
};

export default Featured;
