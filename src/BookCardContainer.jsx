import BookCard from "./BookCard";
import "./styles/BookCardContainer.css";

const BookCardContainer = ({ bookData }) => {
  return (
    <div className="BookCardContainer">
      {bookData.map((book) => {
        return <BookCard key={book.id} {...book} id={book.id} />;
      })}
    </div>
  );
};

export default BookCardContainer;
