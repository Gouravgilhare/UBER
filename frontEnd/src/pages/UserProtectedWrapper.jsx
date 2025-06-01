import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true); // optional for loading fallback
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      setChecking(false);
    }
  }, [navigate, token]);

  if (checking) {
    return <div>Loading...</div>; // Or null
  }

  return <>{children}</>;
};

export default UserProtectWrapper;
