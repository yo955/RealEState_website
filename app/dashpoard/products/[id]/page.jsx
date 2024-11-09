"use client";
import styles from "@/app/ui/dashpoard/products/singleproduct/singleproduct.module.css";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    location: "",
    status: "",
    mainImage: "",
  });

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/compound/find/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={product.mainImage ? `/${product.mainImage}` : "/noavatar.jpg"}
            alt="productImage"
            fill
            className={styles.userImg}
          />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={product.title}
            onChange={handleChange}
          />
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="location"
            value={product.location}
            onChange={handleChange}
          />
          <label>Status</label>
          <select
            name="status"
            id="status"
            value={product.status}
            onChange={handleChange}
          >
            <option value="available">Available</option>
            <option value="soon">Soon</option>
            <option value="sold">Sold</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
