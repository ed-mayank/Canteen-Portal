import React from 'react';
import { useNavigate } from 'react-router-dom';

const VendorLogout = () => {
  const navigate = useNavigate();
  localStorage.removeItem("vendorID")

  return (
    navigate("/")
  )
};

export default VendorLogout;
