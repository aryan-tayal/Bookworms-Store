import BookCardContainer from "./BookCardContainer";
import Filters from "./Filters.jsx";
import "./styles/MainSection.css";

const MainSection = ({ bookData, handleFiltersChange }) => {
  return (
    <div className="MainSection">
      <BookCardContainer bookData={bookData} />
      <Filters handleFiltersChange={handleFiltersChange} />
    </div>
  );
};

export default MainSection;
