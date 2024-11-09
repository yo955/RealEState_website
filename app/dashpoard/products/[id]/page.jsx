"use client";
import styles from "@/app/ui/dashpoard/products/singleproduct/singleproduct.module.css";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState,useEffect } from "react";
const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    axios
      .get(`${apiUrl}/compound/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/noproduct.jpg"
            alt="productImage"
            fill
            className={styles.userImg}
          />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="title" />
          <label>Price</label>
          <input type="number" name="price" placeholder="price" />
          <label>Stock</label>
          <input type="text" name="stock" placeholder="23" />
          <label>Color</label>
          <input type="text" name="Color" placeholder="Choose the color" />
          <label>Size</label>
          <input type="text" name="size" placeholder="21" />
          <textarea type="text" name="size" placeholder=""></textarea>
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">kitchen</option>
            <option value="computer">computer</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            placeholder="description"
            rows="10"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
