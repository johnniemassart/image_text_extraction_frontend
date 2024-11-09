import React from "react";

const HomeTitle = ({ title, setTitle }) => {
  return (
    <div className="home-image-title-wrapper">
      <h1>Title</h1>
      <input
        type="text"
        name="title"
        placeholder="enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default HomeTitle;
