import BookCard from "./BookCard";
import { v4 as uuid } from "uuid";
import "./styles/BookCardContainer.css";

const BookCardContainer = ({ bookData }) => {
  return (
    <div className="BookCardContainer">
      {bookData.map((book) => {
        if (
          book.sold !== true &&
          book.issued !== true &&
          book.active === true
        ) {
          const id = uuid();
          return <BookCard key={id} {...book} id={id} />;
        }
      })}
    </div>
  );
};

export default BookCardContainer;
