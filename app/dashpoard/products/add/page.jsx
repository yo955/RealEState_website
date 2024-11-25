"use client";
import styles from "@/app/ui/dashpoard/products/addproduct/addproduct.module.css";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlinePlus, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Image from "next/image";
import AddImageButton from "./components/AddImageButton";
import UploadCareButton from "./components/UploadCare";
import filestack from "filestack-js";

const AddProductPage = () => {
  const mainImageRef = useRef(null);
  const additionalImagesRef = useRef(null);
  const [mainImage, setMainImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [product, setProduct] = useState({
    mainImage:
      "https://prod-images.cooingestate.com/processed/property_image/image/32810/high.webp",
    title: "",
    location: "",
    status: "available",
    description: "",
    address: "رياض",
    images: [],
    pdf: "",
  });
  useEffect(() => {
    console.log(product);
  }, [product]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {}, [additionalImagesRef]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name.toLowerCase()]: value,
    }));
  };

  const handleAdditionalImagesChange = (event) => {
    const files = Array.from(event.target.files);
    setAdditionalImages((prevImages) => [...prevImages, ...files]);
  };

  useEffect(() => {
    console.log(product);
  }, [product]);

  const handleDeleteAdditionalImage = (index) => {
    setAdditionalImages((prevImages) =>
      prevImages.filter((_, i) => i !== index)
    );
  };

  const openFilePicker = () => {
    const client = filestack.init("A1C2M0j5SS1GEN2ZwMdbhz");
    const options = {
      maxFiles: 20,
      uploadInBackground: false,
      onUploadDone: (res) => console.log(res),
    };
    const picker = client.picker(options);
    picker.open();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
      toast.error("Please log in to add the product.");
      return;
    }

    try {
      await axios.post(`${apiUrl}/compound/add`, product, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        withCredentials: true,
      });

      toast.success("Compound added successfully!");
      setProduct({
        title: "",
        location: "",
        status: "available",
        description: "",
        mainImage: "",
        images: [],
      });
      setMainImage(null);
      setAdditionalImages([]);
    } catch (error) {
      console.error("Error adding apartment:", error);
      console.error("Response data:", error.response?.data);
      toast.error(error?.response?.data);
    }
  };

  return (
    <section className={styles.container}>
      <ToastContainer />
      <section className="add-images flex justify-between items-start w-full">
        {/* <AddImageButton
          uniqueKey={"mainImage"}
          id={"dsss"}
          setProduct={setProduct}
        /> */}{" "}
        {/***cloudinary btn***/}
        <div className={styles.infoContainer}>
          <div className="btn-container flex items-center justify-between gap-5">
            <div className="add-mainImage">
              <label className="my-5">Add Main Image</label>
              <UploadCareButton
                setProduct={setProduct}
                uniqueKey={"mainImage"}
                className="mt-5"
              />
            </div>
            <div className="add-anotherImages">
              <label className="my-5">Add Additional Images</label>
              <UploadCareButton
                setProduct={setProduct}
                uniqueKey={"images"}
                isArray={true}
                className="mt-5"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {additionalImages.map((image, index) => (
              <div key={index} className="relative">
                <Image
                  src={URL.createObjectURL(image)}
                  alt={`Additional image ${index + 1}`}
                  width={100}
                  height={100}
                  className="rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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
            value={product.status || "available"}
            onChange={handleChange}
          >
            <option value="available">Available</option>
            <option value="soon">Soon</option>
            <option value="sold">Sold</option>
          </select>
          <label>Pdf</label>
          <input
            type="text"
            name="Pdf"
            placeholder="Pdf"
            value={product.pdf}
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
          <button type="submit">Add Compound</button>
        </form>
      </div>
    </section>
  );
};

export default AddProductPage;
