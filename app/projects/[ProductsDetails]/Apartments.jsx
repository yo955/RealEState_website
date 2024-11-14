"use client";
import { PiBuildings } from "react-icons/pi";
import { PiBuildingApartmentDuotone } from "react-icons/pi";
import ApartmentCard from "./ApartmentCard";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const Apartments = () => {
  const { ProductsDetails } = useParams();
  const [apartments, setApartments] = useState([]);
  const [compound, setCompound] = useState([]);
  const [error, setError] = useState("");
  const [compoundError, setCompoundError] = useState("");
  const [loading, setLoading] = useState(true);
  const [compoundLoading, setCompoundLoading] = useState(true);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  function getApartments() {
    setLoading(true);
    axios
      .get(`${apiUrl}/apartment/${ProductsDetails}`)
      .then((res) => {
        setApartments(res.data);
      })
      .catch(() => {
        setError("حدث خطأ أثناء جلب البيانات");
      })
      .finally(() => setLoading(false));
  }

  function getCompound() {
    setCompoundLoading(true);
    axios
      .get(`${apiUrl}/compound`)
      .then((res) => {
        setCompound(res.data);
      })
      .catch(() => {
        setCompoundError("حدث خطأ أثناء جلب بيانات المجمعات");
      })
      .finally(() => setCompoundLoading(false));
  }

  useEffect(() => {
    if (ProductsDetails) {
      getApartments();
      getCompound();
    }
  }, [ProductsDetails]);

  return (
    <section className="apartments-section my-10">
      <div className="text flex flex-col justify-center items-center gap-8 w-1/2 mx-auto">
        <div className="icons lg:flex justify-center gap-8 block">
          <div className="right flex items-end gap-2 my-3 md:my-0">
            <PiBuildings className="text-5xl dark:text-white" />
            <h1 className="font-light font-sans text-3xl flex items-center dark:text-white">
              المباني: <span className="text-3xl font-medium">1</span>
            </h1>
          </div>
          <div className="left flex items-end gap-2">
            <PiBuildingApartmentDuotone className="text-5xl dark:text-white" />
            <h1 className="font-light font-sans text-3xl flex items-center dark:text-white">
              الوحدات:{" "}
              <span className="text-3xl font-medium">{apartments.length}</span>
            </h1>
          </div>
        </div>
        <h1 className="text-3xl font-extrabold dark:text-white text-center">
          حياة الرفاهية في قلب شمال العاصمة
        </h1>
        <h2 className="text-2xl font-normal font-sans text-center leading-10 dark:text-white">
          استمتع بأسلوب حياة مترفة وفريدة من نوعها في مشروعنا السكني الفاخر،
          وحدات تمليك تجمع بين الرقي والراحة.
        </h2>
        <Link
          href="https://wa.me/201555909247"
          className="text-black transition hover:text-gray-500/75 text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn bg-transparent font-sans border-[2px] flex justify-center items-center text-xl border-[#c39a62] hover:bg-[#c39a62] p-4 rounded-full h-[40px] w-[300px] dark:text-white">
            تحدث مع مندوب المبيعات
          </button>
        </Link>
        <h1 className="text-4xl font-sans font-extrabold mb-5 dark:text-white">
          الوحدات
        </h1>
      </div>

      <div className="cards grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg mx-auto">
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

      <div className="compound-description mt-10">
        {compoundLoading ? (
          <div>جاري تحميل بيانات المجمعات...</div>
        ) : compoundError ? (
          <div>{compoundError}</div>
        ) : compound.length === 0 ? (
          <div>لا توجد بيانات مجمعات متاحة</div>
        ) : (
          compound.map((product) => (
            <p key={product._id}>{product.description}</p>
          ))
        )}
      </div>
    </section>
  );
};

export default Apartments;
