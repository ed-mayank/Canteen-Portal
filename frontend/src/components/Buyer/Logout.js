import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuyerLogout = () => {
    const navigate = useNavigate();
  return (
      navigate("/")
  )
};

export default BuyerLogout;
