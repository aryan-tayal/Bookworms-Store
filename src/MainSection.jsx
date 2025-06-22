import { useState } from "react";
import BookCardContainer from "./BookCardContainer.jsx";
import Filters from "./Filters.jsx";
import "./styles/MainSection.css";

const MainSection = ({ bookData, handleFiltersChange }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const openOverlay = () => {
    setIsFilterOpen(true);
  };
  const closeOverlay = () => {
    setIsFilterOpen(false);
  };
  return (
    <div className="MainSection">
      <div id="filterOverlayCheck">
        <label htmlFor="filterOverlayCheckInput">
            <span>Filters</span> <i className="fa-solid fa-filter"></i>
        </label>
        <input
          type="checkbox"
          id="filterOverlayCheckInput"
          checked={isFilterOpen}
          onClick={openOverlay}
        />
      </div>
      <BookCardContainer bookData={bookData} />
      <Filters
        handleFiltersChange={handleFiltersChange}
        isFilterOpen={isFilterOpen}
        closeOverlay={closeOverlay}
      />
    </div>
  );
};

export default MainSection;
