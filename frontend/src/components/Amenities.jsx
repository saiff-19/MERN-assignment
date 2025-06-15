import React, { useState } from "react";
import "../styles/Amenities.css";
import pic2 from "../assets/pic2.jpeg";
import {
  FaWifi,
  FaTv,
  FaUtensils,
  FaSnowflake,
  FaSwimmingPool,
  FaCar,
  FaBolt,
  FaTree,
  FaCouch,
  FaBell,
  FaShower,
  FaSoap,
  FaBath,
  FaTshirt,
  FaTemperatureLow,
  FaWind,
} from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { GiHairStrands, GiComb } from "react-icons/gi";

const initialAmenities = [
  { icon: <FaWifi />, label: "Wi-Fi" },
  { icon: <FaTv />, label: "TV" },
  { icon: <FaUtensils />, label: "Kitchen" },
  { icon: <FaSnowflake />, label: "Air Conditioning" },
  { icon: <FaSwimmingPool />, label: "Pool" },
  { icon: <FaCar />, label: "Free parking on premises" },
  { icon: <FaBolt />, label: "EV Charger" },
  { icon: <FaTree />, label: "Garden or backyard" },
  { icon: <FaCouch />, label: "Patio or balcony" },
  { icon: <FaBell />, label: "Carbon monoxide alarm" },
];

const allAmenities = [
  {
    category: "Bathroom",
    items: [
      { icon: <GiHairStrands />, label: "Hair dryer" },
      { icon: <MdCleaningServices />, label: "Cleaning products" },
      { icon: <FaSoap />, label: "Shampoo" },
      { icon: <GiComb />, label: "Conditioner" },
      { icon: <FaSoap />, label: "Body soap" },
      { icon: <FaShower />, label: "Outdoor shower" },
      { icon: <FaBath />, label: "Hot water" },
      { icon: <FaShower />, label: "Shower gel" },
    ],
  },
  {
    category: "Bedroom and laundry",
    items: [
      { icon: <FaTshirt />, label: "Bed linens" },
      { icon: <FaTshirt />, label: "Clothing storage" },
    ],
  },
  {
    category: "Comfort",
    items: [
      { icon: <FaTemperatureLow />, label: "Heating" },
      { icon: <FaWind />, label: "Fan" },
    ],
  },
];

const Amenities = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="amenities-container">
      <hr className="line" />
      <section className="sleep-section">
        <h2>Where you'll sleep</h2>
        <div className="room-cards">
          <div className="room-card">
            <img src={pic2} alt="Bedroom" />
            <p className="room-title">Bedroom</p>
            <p className="room-details">1 double bed, 2 sofas</p>
          </div>
          <div className="room-card">
            <img src={pic2} alt="Living Room" />
            <p className="room-title">Living room</p>
            <p className="room-details">2 sofas</p>
          </div>
        </div>
      </section>

      <section className="amenities-section">
        <h2>What this place offers</h2>
        <div className="amenities-grid">
          {initialAmenities.map((item, index) => (
            <div className="amenity" key={index}>
              <div className="amenity-icon">{item.icon}</div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <button className="show-all-btn" onClick={() => setShowModal(true)}>
          Show all 59 amenities
        </button>
      </section>

      {showModal && (
        <div className="amenities-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <h2>What this place offers</h2>
            {allAmenities.map((category, idx) => (
              <div key={idx} className="amenity-category">
                <h3>{category.category}</h3>
                {category.items.map((item, i) => (
                  <div key={i} className="modal-amenity-item">
                    <span className="modal-icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Amenities;
