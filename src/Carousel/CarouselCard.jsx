import "../styles/Carousel/CarouselCard.css";
import { Category, PriceButton } from "../Utils";

const CarouselCard = ({
  active,
  bgcolor,
  color,
  bookTitle,
  bookAuthor,
  bookBlurb,
  bookCover,
  bookCategory,
  price,
  handleCardClick
}) => {
  return (
    <div
      className={`CarouselCard ${active && "active"}`}
      style={{ backgroundColor: bgcolor }}
      onClick={handleCardClick}
    >
      <div className="CarouselCardImg">
        <img src={bookCover} alt={`Book Cover - ${bookTitle}`} />
      </div>
      <div className="CarouselCardContent">
        <h2 className="CarouselCardTitle text-700">{bookTitle}</h2>
        <h3 className="CarouselCardAuthor">{bookAuthor}</h3>
        <p className="CarouselCardBlurb">{bookBlurb}</p>
        <Category category={bookCategory} />
        <PriceButton price={price} color={color} />
      </div>
    </div>
  );
};

export default CarouselCard;
