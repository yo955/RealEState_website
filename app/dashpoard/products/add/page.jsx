"use client";
import styles from "@/app/ui/dashpoard/products/addproduct/addproduct.module.css";
import axios from "axios";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlinePlus, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Image from "next/image";

const AddProductPage = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [product, setProduct] = useState({
    title: "",
    location: "",
    status: "",
    description: "",
  });
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name.toLowerCase()]: value,
    }));
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
      toast.error("Please log in to add the product.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", product.title);
      formData.append("location", product.location);
      formData.append("status", product.status);
      formData.append("description", product.description);
      if (selectedFile) {
        formData.append("media", selectedFile);
      }

      await axios.post(`${apiUrl}/compound/add`, formData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      toast.success("Compound added successfully!");
      setProduct({
        title: "",
        location: "",
        status: "",
        description: "",
        images: [],
      });
      setSelectedFile(null);
    } catch (error) {
      console.error("Error adding compound:", error);
      toast.error(error?.response?.data?.error);
    }
  };

  const handleDeleteImage = () => {
    setSelectedFile(null);
  };

  const handleEditImage = () => {
    fileInputRef.current.click();
  };

  return (
    <section className={styles.container}>
      <ToastContainer />
      <section className="add-images flex flex-col w-1/5">
        <div className={styles.infoContainer}>
          <label className="my-5">Add Img/Video</label>
          {selectedFile ? (
            selectedFile.type.startsWith("image/") ? (
              <div>
                <Image
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected media"
                  width={300}
                  height={300}
                  className="my-5"
                />
                <div className="flex items-center justify-between my-2 b">
                  <div className="bg-red-700 rounded-full p-1">
                    <AiOutlineDelete
                      size={24}
                      onClick={handleDeleteImage}
                      style={{ cursor: "pointer", margin: "5px" }}
                    />
                  </div>
                  <div className="bg-cyan-800 rounded-full p-1">
                    <AiOutlineEdit
                      size={24}
                      onClick={handleEditImage}
                      style={{ cursor: "pointer", margin: "5px" }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <video width="200" height="200" controls>
                  <source src={URL.createObjectURL(selectedFile)} />
                  Your browser does not support the video tag.
                </video>
                <div className={styles.infoContainer}>
                  <AiOutlineDelete
                    size={24}
                    onClick={handleDeleteImage}
                    style={{ cursor: "pointer", margin: "5px" }}
                  />
                  <AiOutlineEdit
                    size={24}
                    onClick={handleEditImage}
                    style={{ cursor: "pointer", margin: "5px" }}
                  />
                </div>
              </div>
            )
          ) : (
            <div
              className="w-full flex justify-center bg-teal-400 mt-5 text-teal-50 rounded-lg cursor-pointer"
              onClick={handleIconClick}
            >
              <AiOutlinePlus size={40} style={{ cursor: "pointer" }} />
            </div>
          )}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            accept="image/*, video/*"
          />
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
            value={product.status}
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
