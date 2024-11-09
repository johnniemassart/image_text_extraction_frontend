import React from "react";

const HomeImageResults = ({ isSubmitted, setIsSubmitted }) => {
  const handleReturn = () => {
    setIsSubmitted(false);
  };
  return (
    <div className="home-image-results-wrapper">
      <button className="return-btn" onClick={handleReturn}>
        &lt;
      </button>
    </div>
  );
};

export default HomeImageResults;
