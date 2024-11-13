"use client";
import styles from "@/app/ui/dashpoard/products/singleproduct/apartment/apartment.module.css";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Search from "@/app/ui/dashpoard/search/Search";
import Pagination from "@/app/ui/dashpoard/pagination/Pagination";
import { toast } from "react-toastify"; 

const ApartmentPage = () => {
  const { id } = useParams();
  const [apartments, setApartments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [apartmentToDelete, setApartmentToDelete] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/apartment/${id}`)
      .then((res) => {
        setApartments(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [id, apiUrl]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${apiUrl}/apartment/delete/${apartmentToDelete}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      setApartments(apartments.filter((apt) => apt._id !== apartmentToDelete));
      setShowPopup(false);
      toast.success("Apartment deleted successfully!");
    } catch (error) {
      console.error("Error deleting apartment:", error);
      toast.error("Failed to delete apartment.");
    }
  };

  const openDeletePopup = (apartmentId) => {
    setApartmentToDelete(apartmentId);
    setShowPopup(true);
  };

  const closeDeletePopup = () => {
    setShowPopup(false);
    setApartmentToDelete(null);
  };

  if (isLoading) return <div>Loading...</div>;

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
            <td>Rooms</td>
            <td>Space</td>
            <td>Bathrooms</td>
            <td>Description</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {apartments.length === 0 ? (
            <tr>
              <td colSpan="7" className={styles.noData}>
                No Apartment available
              </td>
            </tr>
          ) : (
            apartments.map((apartment) => (
              <tr key={apartment._id}>
                <td>
                  <div className={styles.product}>
                    <Image
                      src={apartment.mainImage || "/noproduct.jpg"}
                      alt="ApartmentImg"
                      width={100}
                      height={100}
                      priority
                      className={styles.productImage}
                    />
                  </div>
                </td>
                <td>{apartment.rooms}</td>
                <td>{apartment.space}</td>
                <td>{apartment.bathrooms}</td>
                <td>{apartment.description}</td>
                <td>{apartment.status}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link
                      href={`/dashpoard/products/${id}/apartment/${apartment._id}`}
                    >
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <button
                      onClick={() => openDeletePopup(apartment._id)}
                      className={`${styles.button} ${styles.delete}`}
                    >
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

      {/* Popup Confirmation */}
      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <p>Are you sure you want to delete this apartment?</p>
            <button className={styles.confirmButton} onClick={handleDelete}>
              <span>Yes</span>
            </button>
            <button className={styles.cancelButton} onClick={closeDeletePopup}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApartmentPage;
