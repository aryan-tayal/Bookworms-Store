import "./styles/BookCard.css";

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
          <span className="tag">Bestseller</span>
        </div>
      </div>
      <div className="BookCardFooter">
        <div className="category">
          <i className="fa-solid fa-circle-user"></i>
          <span>Young Adults</span>
        </div>
        <div className="price-button">
          <i className="fa-solid fa-indian-rupee-sign"></i> 125
        </div>
      </div>
    </div>
  );
};

export default BookCard;
