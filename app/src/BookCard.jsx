import "./styles/BookCard.css";
import { Category, Tag, PriceButton } from "./Utils";

const BookCard = () => {
  return (
    <div className="BookCard">
      <div className="BookCardMain">
        <div className="BookCardImg">
          <img
            src="https://m.media-amazon.com/images/I/815qVQVm0QL.jpg"
            alt="Book Cover"
          />
        </div>
        <div className="BookCardContent">
          <h3>Book Title</h3>
          <h4>Book Author</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            cum neque, temporibus suscipit ipsa, vero laboriosam, nemo quae
            pariatur aspernatur blanditiis earum consectetur! Aperiam
            accusantium natus necessitatibus illum laboriosam praesentium.
          </p>
          <Tag tag="Bestseller" />
        </div>
      </div>
      <div className="BookCardFooter">
        <Category category="Young Adult" />
        <PriceButton price={125} />
      </div>
    </div>
  );
};

export default BookCard;
