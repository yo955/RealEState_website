"use client";
import styles from "@/app/ui/dashpoard/products/products.module.css";
import Pagination from "@/app/ui/dashpoard/pagination/Pagination";
import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/dashpoard/search/Search";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const ProductsPage = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [compound, setCompound] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const trimText = useCallback((text) => {
    return text.length > 10 ? text.slice(0, 10) + "..." : text;
  }, []);

  useEffect(() => {
    axios
      .get(`${apiUrl}/compound`)
      .then((response) => {
        setCompound(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load data. Please try again later.");
        setIsLoading(false);
      });
  }, [apiUrl]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashpoard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Img</td>
            <td>Title</td>
            <td>Location</td>
            <td>Status</td>
            <td>Created At</td>
            <td>Updated At</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {compound.length === 0 ? (
            <tr>
              <td colSpan="7" className={styles.noData}>
                No data available
              </td>
            </tr>
          ) : (
            compound.map((product) => (
              <tr key={product._id}>
                <td>
                  <div className={styles.product}>
                    <Image
                      src={product.mainImage || "/noproduct.jpg"} 
                      alt={product.title}
                      width={100}
                      height={100}
                      className={styles.productImage}
                    />
                  </div>
                </td>
                <td>{product.title}</td>
                <td>{product.location}</td>
                <td>{product.status}</td>
                <td>{trimText(product.createdAt)}</td>
                <td>{trimText(product.updatedAt)}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashpoard/products/${product._id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
