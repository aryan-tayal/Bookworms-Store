import "../styles/Carousel/CarouselCard.css";
import { Category, PriceButton } from "../Utils";

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
  price,
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
        <Category category={bookCategory} />
        <PriceButton price={price} color={color} />
      </div>
    </div>
  );
};

export default CarouselCard;
