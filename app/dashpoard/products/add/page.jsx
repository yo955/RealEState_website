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


const AddProductPage = () => {
  const mainImageRef = useRef(null);
  const additionalImagesRef = useRef(null);
  const [mainImage, setMainImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [product, setProduct] = useState({
    mainImage: "",
    title: "",
    location: "",
    status: "available",
    description: "",
    address:"",
    images: [],
  });
   useEffect(() => {
   console.log(product)
   }, [product])
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

   useEffect(() => {
    
   }, [additionalImagesRef]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name.toLowerCase()]: value,
    }));
  };

  // const handleMainImageChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setMainImage(file);
  //   }
  // };

  const handleAdditionalImagesChange = (event) => {
    const files = Array.from(event.target.files);
    setAdditionalImages((prevImages) => [...prevImages, ...files]);
  };

 
  useEffect(() => {
    console.log(product)
  }, [product]);
 

  const handleDeleteAdditionalImage = (index) => {
    setAdditionalImages((prevImages) =>
      prevImages.filter((_, i) => i !== index)
    );
  };

   const openFilePicker = ()=>{
    const client = filestack.init("A1C2M0j5SS1GEN2ZwMdbhz");
    const options = {
      maxFiles: 20,
      uploadInBackground: false,
      onUploadDone: (res) => console.log(res),
    };
    const picker = client.picker(options);
    picker.open();
   }
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
      toast.error("Please log in to add the product.");
      return;
    }

    try {
    

       await axios.post(
        `${apiUrl}/compound/add`,
        product,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
          withCredentials: true,
        } 
      );

      toast.success("Apartment added successfully!");
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

         <AddImageButton uniqueKey={"mainImage"} id={"dsss"} setProduct={setProduct}/>
       <UploadCareButton setProduct={setProduct} uniqueKey={"mainImage"}/>




        <div className={styles.infoContainer}>
        {/* <AddImageButton  /> */}
        {/* <AddImageButton uniqueKey="images" id={"sas"} setProduct={setProduct}/> */}
        <UploadCareButton setProduct={setProduct} uniqueKey={"images"} isArray={true}/>
          <label className="my-5">Add Additional Images</label>
          <div
          
            className="w- flex justify-center bg-teal-400 mt-5 text-teal-50 rounded-lg cursor-pointer"
            // onClick={() => additionalImagesRef.current.click()}
            onClick={openFilePicker}
          >
           
           
            <AiOutlinePlus size={40} />
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
                <AiOutlineDelete
                  size={20}
                  onClick={() => handleDeleteAdditionalImage(index)}
                  className="cursor-pointer text-red-700 absolute top-1 right-1"
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
          <button type="submit">Add Apartment</button>
        </form>
      </div>
    </section>
  );
};

export default AddProductPage;
