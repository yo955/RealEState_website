"use client";
import ApartmentCard from "./ApartmentCard";
import axios from "axios";
import { useState, useEffect } from "react";
const ApartmentsSide = () => {
  const [apartments, setApartments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    axios
      .get(`${apiUrl}/apartment`)
      .then((res) => {
        setApartments(res.data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError("failed to fetch data" || error?.response?.data?.error);
        setLoading(false);
      });
  }, [apartments]);

  return (
    <>
      <div className="grid grid-cols-3   gap-5 ">
        {apartments.length > 0 ? (
          apartments.map((apartment) => {
            return <ApartmentCard key={apartment._id} apartment={apartment} />;
          })
        ) : (
          <div>loading...</div>
        )}
      </div>
    </>
  );
};

export default ApartmentsSide;
