import React, { useState } from "react";
import "../css/Home.css";
import HomeImageInput from "../components/home/HomeImageInput";
import HomeImageResults from "../components/home/HomeImageResults";

const Home = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="home-wrapper">
      {isSubmitted === false ? (
        <HomeImageInput
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
      ) : (
        <HomeImageResults
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
      )}
    </div>
  );
};

export default Home;
