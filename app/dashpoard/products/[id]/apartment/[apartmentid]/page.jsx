"use client";
import styles from "@/app/ui/dashpoard/products/singleproduct/singleproduct.module.css";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleApartmentPage = () => {
  const { apartmentid } = useParams();

  const [apartment, setApartment] = useState({
    mainImage: "",
    rooms: "",
    space: "",
    floor: "",
    bathrooms: "",
    status: "",
    description: "",
    identity: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state to track form submission

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/apartment/find/${apartmentid}`, { withCredentials: true })
      .then((res) => {
        setApartment(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        toast.error("Failed to load apartment data.");
      });
  }, [apartmentid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApartment((prevApartment) => ({
      ...prevApartment,
      [name]: value, // Directly use the camelCase name
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start submitting
    try {
      await axios.patch(
        `${apiUrl}/apartment/update/${apartmentid}`,
        apartment,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      toast.success("Apartment updated successfully!");
    } catch (error) {
      console.error("Error updating apartment:", error);
      toast.error("Failed to update apartment.");
    } finally {
      setIsSubmitting(false); // Stop submitting
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={apartment.mainImage || "/noproduct.jpg"}
            alt="Apartment Image"
            fill
            priority
            className={styles.userImg}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <p>{apartment.status || "Loading..."}</p>
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>Identity</label>
          <input
            type="text"
            name="identity"
            placeholder="Identity"
            value={apartment.identity}
            onChange={handleChange}
          />
          <label>Rooms</label>
          <input
            type="number"
            name="rooms"
            placeholder="Rooms"
            value={apartment.rooms}
            onChange={handleChange}
          />
          <label>Space</label>
          <input
            type="number"
            name="space"
            placeholder="Space"
            value={apartment.space}
            onChange={handleChange}
          />
          <label>Floor</label>
          <input
            type="number"
            name="floor"
            placeholder="Floor"
            value={apartment.floor}
            onChange={handleChange}
          />
          <label>Bathrooms</label>
          <input
            type="number"
            name="bathrooms"
            placeholder="Bathrooms"
            value={apartment.bathrooms}
            onChange={handleChange}
          />
          <label>Status</label>
          <select
            name="status"
            id="status"
            value={apartment.status}
            onChange={handleChange}
          >
            <option value="available">Available</option>
            <option value="soon">Soon</option>
            <option value="sold">Sold</option>
          </select>
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            rows={5}
            placeholder="Description"
            value={apartment.description}
            onChange={handleChange}
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleApartmentPage;
