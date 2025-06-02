import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
const CaptainProtectWrapper = ({ children }) => {


  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext); // optional for loading fallback
  const [isLoading, setIsLoading] = useState(true); // optional for loading fallback
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get(
        `${import.meta.env.VITE_BASE_URL}/captain/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          setCaptain(data.captain);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          localStorage.removeItem("token");
          navigate("/captain-login");
        } else {
          console.error("ERROR : ", err);
        }
      });
  }, [navigate, token, setCaptain]);

  if (isLoading) {
    return <div>Loading...</div>; // Or null
  }


  return <>{children}</>;
};

export default CaptainProtectWrapper;
