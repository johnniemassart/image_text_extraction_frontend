import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import HomeTitle from "./HomeTitle";
import HomeImagePreview from "./HomeImagePreview";

const HomeImageInput = ({
  isSubmitted,
  setIsSubmitted,
  message,
  setMessage,
}) => {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const predictionUrl = "http://127.0.0.1:8000/api/upload/";
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      setImages((prev) => [...prev, file]);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });
  const handleRemoveImage = (image) => {
    setImages((prev) => prev.filter((item) => item !== image));
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    for (let i = 0; i < images.length; i++) {
      formData.append("uploaded_images", images[i]);
    }
    await axios
      .post(predictionUrl, formData)
      .then((res) => {
        setMessage(res.data.message);
        setTitle("");
        setImages([]);
        setIsSubmitted(true);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="home-image-input-wrapper">
      <HomeTitle title={title} setTitle={setTitle} />
      <div {...getRootProps({ className: "home-image-dropzone" })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <h1 className="dropzone-header">Drag Active</h1>
        ) : (
          <h1 className="dropzone-header">Drop your files here</h1>
        )}
      </div>
      {images.length > 0 && (
        <HomeImagePreview
          images={images}
          handleRemoveImage={handleRemoveImage}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default HomeImageInput;
