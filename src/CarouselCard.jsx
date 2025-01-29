import "./styles/CarouselCard.css";

const CarouselCard = ({
  hide,
  neighbour,
  bgcolor,
  color,
  bookTitle,
  bookAuthor,
  bookBlurb,
  bookCover,
  bookCategory,
}) => {
  return (
    <div
      className={`CarouselCard ${hide && "hide"} ${neighbour && "neighbour"}`}
      style={{ backgroundColor: bgcolor }}
    >
      <div className="CarouselCardImg">
        <img src={bookCover} alt={`Book Cover - ${bookTitle}`} />
      </div>
      <div className="CarouselCardContent">
        <h2 className="CarouselCardTitle text-700">{bookTitle}</h2>
        <h3 className="CarouselCardAuthor">{bookAuthor}</h3>
        <p className="CarouselCardBlurb">{bookBlurb}</p>
        <div className="category">
          <i className="fa-solid fa-circle-user"></i>
          <span>{bookCategory}</span>
        </div>
        <div className="price-button" style={{ backgroundColor: color }}>
          <i className="fa-solid fa-indian-rupee-sign"></i> 125
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
