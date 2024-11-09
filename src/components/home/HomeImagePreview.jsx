import React from "react";

const HomeImagePreview = ({ preview, handleRemoveImage, handleSubmit }) => {
  return (
    <div className="preview-wrapper">
      <h2 className="preview-header">preview</h2>
      <div className="image-preview-wrapper">
        {preview.map((image, idx) => (
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
  );
};

export default HomeImagePreview;
