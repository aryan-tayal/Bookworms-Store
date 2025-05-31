import BookCardContainer from "./BookCardContainer";
import Filters from "./Filters.jsx";
import "./styles/MainSection.css";

const MainSection = ({ bookData }) => {
  return (
    <div className="MainSection">
      <BookCardContainer bookData={bookData} />
      <Filters />
    </div>
  );
};

export default MainSection;
