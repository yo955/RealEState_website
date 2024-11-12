"use client";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import AosWrapper from "../lib/ScrollAnimation";
import Card from "./FeaturedCard";
import Link from "next/link";

const Featured = () => {
  const [products, setProducts] = useState([]);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/compound`);
        setProducts(response.data.slice(0, 3));
       
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };
    fetchProducts();
  }, []);

  const CardJsx = products.map((item, index) => {
    const status = item.status;
    let link = "";
    if (status == "available" || status == "sold") {
      link = `/projects/${item._id}?image=${item.mainImage}`;
    }
    return (
      <AosWrapper key={index}>
        <div data-aos="zoom-in" key={item._id}>
          <Link href={link}>
            <Card
              status={item.status}
              imageUrl={item.mainImage}
              location={item.location}
              projectTitle={item.title}
            />
          </Link>
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
