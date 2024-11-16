"use client";
import styles from "@/app/ui/dashpoard/products/singleproduct/singleproduct.module.css";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    location: "",
    status: "",
    mainImage: "",
    description: "",
    address: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/compound/find/${id}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [id, apiUrl]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name.toLowerCase()]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      toast.warn("Please log in to update the product.", {
        position: "bottom-right",
      });
      return;
    }
    try {
      await axios.patch(`${apiUrl}/compound/update/${product._id}`, product, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      toast.success("Compound updated successfully!", {
        position: "bottom-right",
      });
    } catch (error) {
      console.error("Error updating compound:", error);
      toast.error("Failed to update compound.", {
        position: "bottom-right",
      });
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={product.mainImage ? product.mainImage : "/noavatar.png"}
            alt="productImage"
            fill
            className={styles.userImg}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
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
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="address"
            value={product.address}
            onChange={handleChange}
          />
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
            rows={5}
            style={{ direction: "rtl" }}
          ></textarea>
          <button type="submit">Update</button>
        </form>
        <Link prefetch={true} href={`/dashpoard/products/${id}/apartment`}>
          <button className={styles.AddApartmentBtn}>Add an apartment</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProductPage;
