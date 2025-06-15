import React from "react";
import "../styles/ListingDetails.css";
import guestFavImg from "../assets/guestfav.png";
import { FaTrophy, FaDoorOpen } from "react-icons/fa";
import { GiWaveCrest } from "react-icons/gi";
import hostimg from "../assets/host.jpeg";

const ListingDetails = () => {
  return (
    <div className="listing-container">
      <h2>Entire rental unit in Gurugram, India</h2>
      <p className="subtitle">2 guests · 1 bedroom · 1 bed · 1 bathroom</p>

      <div className="badges">
        <div className="badge-left">
          <img
            src={guestFavImg}
            alt="Guest Favourite"
            className="guest-fav-img"
          />
          <span className="box-text">
            One of the most loved homes on Airbnb, according to guests
          </span>
        </div>
        <span className="rating">
          <span className="rating-bold">
            <span className="num-span">4.99</span>
            <br />
            ★★★★★
          </span>
          <span className="rating-bold">
            <span className="num-span">85</span>
            <br /> Reviews
          </span>
        </span>
      </div>
      <div className="badges-divider"></div>

      <div className="host-info">
        <div className="host-name">
          <img src={hostimg} alt="Host" className="host-img" />
          <div>
            <p className="host-by">
              <strong>Hosted by Sumit</strong>
            </p>
            <p className="host-status">Superhost · 1 year hosting</p>
          </div>
        </div>
        <hr />
        <div className="host-points">
          <div className="point">
            <FaTrophy className="icon" />
            <div>
              <strong>Top 10% of homes</strong>
              <p>
                This home is highly ranked based on ratings, reviews and
                reliability.
              </p>
            </div>
          </div>
          <div className="point">
            <FaDoorOpen className="icon" />
            <div>
              <strong>Self check-in</strong>
              <p>Check yourself in with the lockbox.</p>
            </div>
          </div>
          <div className="point">
            <GiWaveCrest className="icon" />
            <div>
              <strong>Dive right in</strong>
              <p>This is one of the few places in the area with a pool.</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="listing-description">
        <p>
          Welcome to this another luxurious property by Tulip Homes situated on
          12 floor. It is a completely fresh apartment with all new furniture
          and linen. Garden patio with flower plants makes it unique in class.
          The place is perfect for relaxing and enjoying scenic view of city
          &amp; Aravali range. Apartment is loaded with smart tv (all
          applications works), a cozy double bed, big wardrobe with locker, 2
          sofa chairs, stylish coffee table, fridge, microwave, electric kettle,
          toaster, wifi &amp; many more
          <br />
          <br />
          <b>The space...</b>
        </p>
        <button className="show-more">Show more</button>
      </div>
    </div>
  );
};

export default ListingDetails;
