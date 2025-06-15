import React, { useState, useRef, useEffect } from "react";
import "../styles/BookingSection.css";

const BookingSection = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("No of guests");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const dropdownRef = useRef(null);
  const maxGuests = 2;

  const totalGuests = adults + children;

  useEffect(() => {
    fetch("http://localhost:5000/api/booking")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCheckIn(data.checkIn ? data.checkIn.slice(0, 10) : "");
          setCheckOut(data.checkOut ? data.checkOut.slice(0, 10) : "");
          if (data.guests) setGuests(data.guests);
        }
      })
      .catch((err) => console.error("Failed to fetch booking data:", err));
  }, []);

  const saveBooking = async (updatedGuests) => {
    try {
      await fetch("http://localhost:5000/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          checkIn,
          checkOut,
          guests: updatedGuests,
        }),
      });
    } catch (err) {
      console.error("Failed to save booking data:", err);
    }
  };

  useEffect(() => {
    const guestLabel = `${totalGuests} guest${totalGuests > 1 ? "s" : ""}${
      infants ? `, ${infants} infant${infants > 1 ? "s" : ""}` : ""
    }`;
    setGuests(guestLabel);
    saveBooking(guestLabel);
  }, [adults, children, infants]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="booking-sticky-wrapper">
      <div className="booking-card">
        <div className="booking-title">Add dates for the prices</div>
        <div className="booking-form">
          <div className="booking-dates-row">
            <div className="booking-date-cell">
              <label>CHECK-IN</label>
              <input
                type="date"
                className="booking-date-input"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
              <div className="booking-date-display">
                {checkIn ? (
                  new Date(checkIn).toLocaleDateString()
                ) : (
                  <span className="placeholder">Add date</span>
                )}
              </div>
            </div>
            <div className="booking-date-cell">
              <label>CHECKOUT</label>
              <input
                type="date"
                className="booking-date-input"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
              <div className="booking-date-display">
                {checkOut ? (
                  new Date(checkOut).toLocaleDateString()
                ) : (
                  <span className="placeholder">Add date</span>
                )}
              </div>
            </div>
          </div>

          <div
            className="booking-guests"
            tabIndex={0}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            ref={dropdownRef}
          >
            <label>GUESTS</label>
            <div className="booking-guests-value">
              {guests}
              <span className="booking-guests-arrow">&#9662;</span>
            </div>
            {dropdownOpen && (
              <div className="custom-guests-dropdown">
                {[
                  {
                    label: "Adults",
                    desc: "Age 13+",
                    value: adults,
                    setValue: setAdults,
                    disabled: false,
                  },
                  {
                    label: "Children",
                    desc: "Ages 2–12",
                    value: children,
                    setValue: setChildren,
                    disabled: false,
                  },
                  {
                    label: "Infants",
                    desc: "Under 2",
                    value: infants,
                    setValue: setInfants,
                    disabled: false,
                  },
                  {
                    label: "Pets",
                    desc: <u>Bringing a service animal?</u>,
                    value: pets,
                    setValue: setPets,
                    disabled: true,
                  },
                ].map(({ label, desc, value, setValue, disabled }) => (
                  <div className="guest-row" key={label}>
                    <div>
                      <div className="guest-label">{label}</div>
                      <div className="guest-desc">{desc}</div>
                    </div>
                    <div className="guest-controls">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setValue((prev) => Math.max(0, prev - 1));
                        }}
                        disabled={value === 0}
                      >
                        −
                      </button>
                      <span>{value}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (
                            (label === "Infants" && value < 5) ||
                            (!disabled && totalGuests < maxGuests)
                          ) {
                            setValue((prev) => prev + 1);
                          }
                        }}
                        disabled={
                          (label === "Infants" && value >= 5) ||
                          (label !== "Infants" &&
                            (disabled || totalGuests >= maxGuests))
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
                <div className="guest-note">
                  This place has a maximum of {maxGuests} guests, not including
                  infants. Pets aren't allowed.
                </div>
                <div
                  className="guest-close"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen(false);
                  }}
                >
                  Close
                </div>
              </div>
            )}
          </div>

          <button className="booking-btn" onClick={() => {}}>
            Reserve
          </button>
        </div>
        <div className="booking-report">
          <span className="booking-flag">&#9873;</span>
          <a href="#" className="booking-report-link">
            Report this listing
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
