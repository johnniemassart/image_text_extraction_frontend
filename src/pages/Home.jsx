import React, { useState } from "react";
import "../css/Home.css";
import HomeImageInput from "../components/home/HomeImageInput";
import HomeImageResults from "../components/home/HomeImageResults";

const Home = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState(null);
  return (
    <div className="home-wrapper">
      {isSubmitted === false ? (
        <HomeImageInput
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
          message={message}
          setMessage={setMessage}
        />
      ) : (
        <HomeImageResults
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
          message={message}
          setMessage={setMessage}
        />
      )}
    </div>
  );
};

export default Home;
