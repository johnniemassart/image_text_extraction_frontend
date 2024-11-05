import React, { useEffect, useState } from "react";

const HomeImageInput = () => {
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const preview = URL.createObjectURL(file);
    setImage(preview);
  };
  //   useEffect(() => {
  //     console.log(image);
  //   }, [image]);
  return (
    <div className="home-image-input-wrapper">
      <form>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </form>
      {image && (
        <>
          <h2>preview</h2>
          <img src={image} style={{ width: "250px", objectFit: "contain" }} />
        </>
      )}
    </div>
  );
};

export default HomeImageInput;
