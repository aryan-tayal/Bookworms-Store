import { useParams } from "react-router";
import data from "./assets/data/data_with_isbn.json";
import { useState } from "react";
import { Category, Tag, PriceButton } from "./Utils";
import "./styles/MainSection.css";

const BookPage = () => {
  let { id } = useParams();
  const [book, setBook] = useState(
    data.filter((b) => b.id === parseInt(id))[0],
  );
  const [image, setImage] = useState("");
  const localSrc = `/covers/${book.id}.png`;
  const fallbackSrc = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`;
  return (
    <div className="MainSection">
      {book.title}
      <div>
        <div>
          <img
            src={localSrc}
            onLoad={(e) => setImage(e.currentTarget.src)}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.onload = (ev) => setImage(ev.currentTarget.src);
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

          <div className="BookCardTags">
            <Tag tag={book.fiction ? "Fiction" : "Non-Fiction"} />
            <Tag tag={book.genre || "Novel"} />
            {book.bestseller && (
              <Tag
                bestseller
                tag={<i className="fa-solid fa-heart"></i>}
                color="#d12009"
              />
            )}
          </div>

          <div className="BookCardCondition">
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
