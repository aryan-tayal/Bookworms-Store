import { useParams } from "react-router";
import data from "./assets/data/data_new.json";
import { useState } from "react";
import { Category, Tag, PriceButton, Stars } from "./Utils";
import "./styles/BookPage.css";

const BookPage = () => {
  let { id } = useParams();
  const [book, setBook] = useState(data.filter((b) => b.id === id)[0]);
  const localSrc = `/covers/${book.id}.png`;
  const fallbackSrc = `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`;
  return (
    <div className="BookPage">
      <div className="BookPage-Side">
        <div className="BookPage-Img">
          <img
            src={localSrc}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallbackSrc;
            }}
            loading="lazy"
            decoding="async"
            alt={`${book.title} cover`}
          />
        </div>
        <div className="BookRating">
          <Stars rating={book.rating} />
        </div>
      </div>
      <div className="BookPage-Content">
        <h3>{book.title}</h3>
        <h4>{book.author}</h4>

        <p>{book.blurb}</p>

        <div className="BookPage-Tags">
          {book.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}

          {book.bestseller && (
            <Tag
              bestseller
              tag={<i className="fa-solid fa-heart"></i>}
              color="#d12009"
            />
          )}
        </div>

        {book.award && (
          <div className="BookAward">
            <i className="fa-solid fa-award"></i>
            {book.award}
          </div>
        )}

        <div className="BookPage-Price">
          <PriceButton price={book.price} />
        </div>
      </div>
      <div className="BookPage-Details">
        <div>
          <Category category={book.ageCategory} />
          <i className="fa-solid fa-book"></i> {book.condition}
        </div>
      </div>
    </div>
  );
};

export default BookPage;
