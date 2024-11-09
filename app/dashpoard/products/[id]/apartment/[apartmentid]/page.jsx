"use client";
import styles from "@/app/ui/dashpoard/products/singleproduct/singleproduct.module.css";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const SingleApartmentPage = () => {
  const { apartmentid } = useParams();
  console.log("apartment: " + apartmentid);

  const [product, setProduct] = useState({
    title: "",
    location: "",
    status: "",
    mainImage: "",
  });

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/apartment/find/${apartmentid}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [apartmentid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${apiUrl}/apartment/update/${apartmentid}`, product);
      alert("Apartment updated successfully!");
    } catch (error) {
      console.error("Error updating apartment:", error);
      alert("Failed to update apartment.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={product.mainImage ? `${apiUrl}/${product.mainImage}` : "/noavatar.jpg"}
            alt="productImage"
            fill
            className={styles.userImg}
          />
        </div>
        {product.title || "Loading..."}
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={product.title}
            onChange={handleChange}
          />
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
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
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleApartmentPage;
