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
      {apartments.length > 0 ? (
        apartments.map((apartment) => {
          return (
            <div key={apartment._id} className="grid grid-cols-4 gap-5">
              <ApartmentCard apartment={apartment} />
            </div>
          );
        })
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default ApartmentsSide;
