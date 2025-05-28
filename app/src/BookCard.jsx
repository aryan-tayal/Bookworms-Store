import "./styles/BookCard.css";
import { Category, Tag, PriceButton } from "./Utils";
import { useExtractColors } from "react-extract-colors";

const BookCard = ({
  image = "https://m.media-amazon.com/images/I/910vYI-gm0L._AC_UF1000,1000_QL80_.jpg",
}) => {
  const { colors, dominantColor, darkerColor, lighterColor, loading, error } =
    useExtractColors(image, { format: "hex" });

  const lightColor = `${lighterColor}55`;
  const mainColor = `${dominantColor}aa`;
  return (
    <div
      className="BookCard"
      style={{
        "--card-accent": darkerColor,
        "--card-main": mainColor,
        "--card-light": lightColor,
      }}
    >
      <div className="BookCardBg" tabIndex={-1}></div>
      <div
        className="BookCardImg"
        style={{
          transform: `rotate(${Math.floor(Math.random() * 30) - 15}deg)`,
        }}
      >
        <img src={image} alt="Book Cover" />
      </div>
      <div className="BookCardContent">
        <h3>Book Title</h3>
        <h4>Book Author</h4>
        <div className="BookCardTags">
          <Tag tag="Fiction" color={mainColor} />
          <Tag tag="Thriller" color={mainColor} />
        </div>

        <div className="BookCardFooter">
          <Category category="Young Adult" />
          <PriceButton
            price={125}
            color={mainColor}
            borderColor={darkerColor}
          />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
