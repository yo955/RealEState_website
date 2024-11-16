"use client"
import { useState } from "react";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";


import CloudinaryUploadWidget from "../utils/CloudinaryUploadWidget";

 function AddImageButton({setProduct}) {
  const [publicId, setPublicId] = useState("");
  const [cloudName,setCloudNmae] = useState("hzxyensd5");

  const [uploadPreset,setUpload] = useState("aoh4fpwm");



  const [uwConfig] = useState({
    cloudName,
    uploadPreset

  });


  const cld = new Cloudinary({
    cloud: {
      cloudName
    }
  });

  const myImage = cld.image(publicId);

  return (
    <>
    <div className="App">
      <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} setProduct={setProduct}/>

      <div style={{ width: "500px" }} >
        <AdvancedImage
        className="max-h-[100px] mt-[20px]"
          style={{ maxWidth: "100%" }}
          cldImg={myImage}
          plugins={[responsive(), placeholder()]}
        />
      </div>
    </div>
    </>
  );
}

export default AddImageButton