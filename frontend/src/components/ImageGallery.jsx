import React from "react";
import "../styles/ImageGallery.css";
import pic1 from "../assets/pic_1.jpeg";
import { CgMenuGridO } from "react-icons/cg";
import { FiShare2 } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

const ImageGallery = () => {
  return (
    <div className="gallery-wrapper">
      <div className="gallery-header">
        <h1>Highrise Heaven 12th Floor With Garden Patio</h1>
        <div className="header-actions">
          <span className="action-button">
            <FiShare2 /> <u>Share</u>
          </span>
          <span className="action-button">
            <FaRegHeart /> <u>Save</u>
          </span>
        </div>
      </div>

      <div className="image-gallery">
        <div className="left-image">
          <img src={pic1} alt="Main" />
        </div>
        <div className="right-images">
          <img src={pic1} alt="Room view 1" className="uppercorner" />
          <img src={pic1} alt="Room view 2" />
          <img src={pic1} alt="Room view 3" />
          <div className="last-image-container">
            <img src={pic1} alt="Room view 4" />
            <div className="show-photos-overlay">
              <CgMenuGridO /> Show all photos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
