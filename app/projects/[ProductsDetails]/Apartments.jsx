"use client";
import { PiBuildings } from "react-icons/pi";
import { PiBuildingApartmentDuotone } from "react-icons/pi";
import ApartmentCard from "./ApartmentCard";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const Apartments = () => {
  const { ProductsDetails } = useParams();
  console.log(ProductsDetails);
  
  const [apartments, setApartments] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); 

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    setLoading(true); 
    axios
      .get(`${apiUrl}/apartment/${ProductsDetails}`)
      .then((res) => {
        console.log(res.data);
        setApartments(res.data);
      })
      .catch((err) => {
        setError("An error occurred while fetching data");
      })
      .finally(() => setLoading(false)); 
  }, [ProductsDetails]);

  return (
    <section className="apartments-section my-10">
      <div className="text flex flex-col justify-center items-center gap-8 w-1/2 mx-auto">
        <div className="icons flex justify-center gap-8 ">
          <div className="right flex items-end gap-2">
            <PiBuildings className="text-5xl " />
            <h1 className="font-light font-sans text-3xl flex items-center">
              المبانى : <span className="text-3xl font-medium">1</span>
            </h1>
          </div>
          <div className="left flex items-end gap-2">
            <PiBuildingApartmentDuotone className="text-5xl" />
            <h1 className="font-light font-sans text-3xl flex items-center">
              الوحدات : <span className="text-3xl font-medium">{apartments.length}</span>
            </h1>
          </div>
        </div>
        <h1 className="text-3xl font-extrabold">
          حياة الرفاهية في قلب شمال العاصمة
        </h1>
        <h2 className="text-2xl font-normal font-sans text-center leading-10">
          استمتع بأسلوب حياة مترفة وفريدة من نوعها في مشروعنا السكني الفاخر، وحدات تمليك تجمع بين الرقي والراحة.
        </h2>
        <button className="btn bg-transparent font-sans border-[2px] flex justify-center items-center text-xl border-[#c39a62] hover:bg-[#c39a62] p-4 rounded-full h-[40px] w-[300px]">
          تحدث مع مندوب المبيعات
        </button>
        <h1 className="text-4xl font-sans font-extrabold mb-5">الـوحـدات</h1>
      </div>
      <div className="cards grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 container">
        {loading ? (
          <div>جاري التحميل...</div>
        ) : error ? (
          <div>{error}</div>
        ) : apartments.length === 0 ? (
          <div>لا توجد بيانات متاحة</div>
        ) : (
          apartments.map((apartment) => (
            <ApartmentCard key={apartment._id} apartment={apartment} />
          ))
        )}
      </div>
    </section>
  );
};

export default Apartments;
