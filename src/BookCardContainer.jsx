import BookCard from "./BookCard";

import "./styles/BookCardContainer.css"

const BookCardContainer = ({bookData}) => {
  return (
    <div className="BookCardContainer">
      {bookData.map((book) => {
        if (book.sold !== true && book.issued !== true) {
          return <BookCard key={book.id} {...book} />;
        }
      })}
    </div>
  );
};

export default BookCardContainer;
