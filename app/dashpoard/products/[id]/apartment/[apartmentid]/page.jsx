"use client";
import styles from "@/app/ui/dashpoard/products/singleproduct/singleproduct.module.css";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const SingleApartmentPage = () => {
  const { apartmentid } = useParams();
  console.log("apartment: " + apartmentid);

  const [apartment, setApartment] = useState({
    mainImage: "",
    rooms: "",
    space: "",
    bathrooms: "",
    status: "",
    description: "",
  });

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/apartment/find/${apartmentid}`)
      .then((res) => {
        setApartment(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [apartmentid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevApartment) => ({
      ...prevApartment,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={
              apartment.mainImage ? `/${apartment.mainImage}` : "/noavatar.jpg"
            }
            alt="productImage"
            fill
            className={styles.userImg}
          />
        </div>
        {apartment.status || "Loading..."}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Rooms</label>
          <input
            type="text"
            name="Rooms"
            placeholder="Romms"
            value={apartment.rooms}
            onChange={handleChange}
          />
          <label>Space</label>
          <input
            type="text"
            name="Space"
            placeholder="Space"
            value={apartment.space}
            onChange={handleChange}
          />
          <label>Bathrooms</label>
          <input
            type="text"
            name="Bathrooms"
            placeholder="Bathrooms"
            value={apartment.bathrooms}
            onChange={handleChange}
          />
          <label>Status</label>
          <select
            name="Status"
            id="Status"
            value={apartment.status}
            onChange={handleChange}
          >
            <option value="available">Available</option>
            <option value="soon">Soon</option>
            <option value="sold">Sold</option>
          </select>
          <textarea
            name="desc"
            id="desc"
            value={apartment.description}
            onChange={handleChange}
            placeholder="Description"
            rows={5}
          ></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleApartmentPage;
