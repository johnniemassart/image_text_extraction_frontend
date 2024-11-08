import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const HomeImageInput = () => {
  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/png",
  });
  const handleRemoveImage = (image) => {
    setImages((prev) => prev.filter((item) => item !== image));
  };
  const handleSubmit = () => {
    console.log("submit");
  };
  return (
    <div className="home-image-input-wrapper">
      <div {...getRootProps({ className: "home-image-dropzone" })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <h1 className="dropzone-header">Drag Active</h1>
        ) : (
          <h1 className="dropzone-header">Drop your files here</h1>
        )}
      </div>
      {images.length > 0 && (
        <div className="preview-wrapper">
          <h2 className="preview-header">preview</h2>
          <div className="image-preview-wrapper">
            {images.map((image, idx) => (
              <React.Fragment key={idx}>
                <div className="ind-image-wrapper">
                  <img
                    src={image}
                    alt={`image # ${idx} preview`}
                    className="image-preview"
                    style={{ width: "250px", objectFit: "contain" }}
                  />
                  <p
                    className="remove-image"
                    onClick={() => handleRemoveImage(image)}
                  >
                    X
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="preview-btn-wrapper">
            <button onClick={handleSubmit}>submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeImageInput;
