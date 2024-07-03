import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="custom-container">
      <form onSubmit={onSubmit} className="custom-form">
        <div className="custom-form-container">
          <input
            onChange={(e) => setText(e.target.value)}
            className="custom-input"
            type="text"
            placeholder="Search Image Term..."
          />
          <button className="custom-button" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
