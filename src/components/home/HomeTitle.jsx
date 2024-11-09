import React from "react";

const HomeTitle = ({ title, setTitle }) => {
  return (
    <div className="home-image-title-wrapper">
      <input
        type="text"
        name="title"
        placeholder="enter title..."
        className="home-image-title-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default HomeTitle;
