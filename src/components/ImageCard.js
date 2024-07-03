import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="custom-container">
      <img src={image.webformatURL} alt="" className="custom-image" />
      <div className="custom-content">
        <div className="custom-title">Photo by {image.user}</div>
        <ul className="custom-list">
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="custom-content">
        {tags.map((tag, index) => (
          <span key={index} className="custom-tag">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
