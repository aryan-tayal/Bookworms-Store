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
        <div className="BookDetail">
          <i className="fa-solid fa-users"></i>
          <div>
            <span>Age Category</span>
            <strong>{book.ageCategory}</strong>
          </div>
        </div>

        <div className="BookCondition">
          <div className="BookDetailLabel">
            <i className="fa-solid fa-star"></i>
            <strong>Book Condition</strong>
          </div>

          <div className="ConditionScale">
            {["New", "Like New", "Good", "Used"].map((condition) => (
              <div
                key={condition}
                className={`ConditionStep ${
                  book.condition === condition ? "active" : ""
                }`}
              >
                <div className="ConditionDot"></div>
                <span>{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
