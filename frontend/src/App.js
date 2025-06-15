import ImageGallery from "./components/ImageGallery";
import ListingDetails from "./components/ListingDetails";
import Amenities from "./components/Amenities";
import BookingSection from "./components/BookingSection";
import Navbar from "./components/Navbar";
import "./styles/app.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <ImageGallery />
      <div className="details-booking-wrapper">
        <div className="listing-details-container">
          <ListingDetails />
          <Amenities />
        </div>
        <BookingSection />
      </div>
    </div>
  );
}

export default App;
