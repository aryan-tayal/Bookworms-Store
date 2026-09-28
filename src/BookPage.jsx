import { useParams } from "react-router";
import data from "./assets/data/data_new.json";
import { useState } from "react";
import { Category, Tag, PriceButton } from "./Utils";
import "./styles/MainSection.css";

const BookPage = () => {
  let { id } = useParams();
  const [book, setBook] = useState(data.filter((b) => b.id === id)[0]);
  const localSrc = `/covers/${book.id}.png`;
  const fallbackSrc = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`;
  return (
    <div className="MainSection">
      <div>
        <div>
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

        <div>
          <h3>{book.title}</h3>
          <h4>{book.author}</h4>
          <p>{book.blurb}</p>
          <div className="BookCardTags">
            {book.tags.map((tag) => (
              <Tag tag={tag} />
            ))}
            {book.bestseller && (
              <Tag
                bestseller
                tag={<i className="fa-solid fa-heart"></i>}
                color="#d12009"
              />
            )}
          </div>
          <div className="BookRating">Goodreads Rating : {book.rating}</div>
          <div className="BookAward">{book.award}</div>
          <div className="BookCardcondition">
            <i className="fa-solid fa-book"></i> {book.condition}
          </div>

          <div className="BookCardFooter">
            <Category category={book.ageCategory} />
            <PriceButton price={book.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
