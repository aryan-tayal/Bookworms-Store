import BookCardContainer from "./BookCardContainer";
import Filters from "./Filters.jsx";
import "./styles/MainSection.css";

const MainSection = ({ bookData, handleFilters }) => {
  return (
    <div className="MainSection">
      <BookCardContainer bookData={bookData} />
      <Filters handleFilters = {handleFilters} />
    </div>
  );
};

export default MainSection;
