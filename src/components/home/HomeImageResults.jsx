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
    setMessage(null);
  };
  return (
    <div className="home-image-results-wrapper">
      <h1 className="message-header">image text extraction</h1>
      <button className="return-btn" onClick={handleReturn}>
        &lt;
      </button>
      {message.map((resp, idx) => (
        <div key={idx} className="message-ind-result-wrapper">
          <p className="message-ind-result">{resp}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeImageResults;
