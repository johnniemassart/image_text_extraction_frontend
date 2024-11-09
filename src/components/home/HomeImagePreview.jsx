import React from "react";

const HomeImagePreview = ({ images, handleRemoveImage, handleSubmit }) => {
  return (
    <div className="preview-wrapper">
      <h2 className="preview-header">preview</h2>
      <div className="image-preview-wrapper">
        {images.map((image, idx) => (
          <React.Fragment key={idx}>
            <div className="ind-image-wrapper">
              <img
                src={URL.createObjectURL(image)}
                alt={`image # ${idx} preview`}
                className="image-preview"
              />
              <p
                className="remove-image"
                onClick={() => handleRemoveImage(image)}
              >
                &#10005;
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="preview-btn-wrapper">
        <button onClick={handleSubmit} className="submit-btn">
          submit
        </button>
      </div>
    </div>
  );
};

export default HomeImagePreview;
