import axios from "axios";
import { useState, useEffect } from "react";
const ApartmentsSide = () => {
  const [apartments, setApartments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    axios
      .get(`${apiUrl}/apartment`)
      .then((res) => {
        setApartments(res.data);
      })
      .catch((error) => {
        setError("failed to fetch data" || error?.response?.data?.error);
      });
  }, [input]);
  return <div>ApartmentsSide</div>;
};

export default ApartmentsSide;
