import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeImageResults = ({
  isSubmitted,
  setIsSubmitted,
  message,
  setMessage,
}) => {
  const handleReturn = () => {
    setIsSubmitted(false);
  };
  return (
    <div className="home-image-results-wrapper">
      <button className="return-btn" onClick={handleReturn}>
        &lt;
      </button>
      {message && <p style={{ color: "white" }}>{message}</p>}
    </div>
  );
};

export default HomeImageResults;
