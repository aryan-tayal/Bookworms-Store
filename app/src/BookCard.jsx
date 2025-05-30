import "./styles/BookCard.css";
import { useState, useEffect, useRef } from "react";
import { Category, Tag, PriceButton } from "./Utils";
import { useExtractColors } from "react-extract-colors";

import axios from "axios";

const BookCard = ({
  title,
  author,
  price,
  fiction,
  genre = "Novel",
  ageCategory,
  bestseller,
  condition = "Good",
}) => {
  const [image, setImage] = useState();
  const [cardColors, setCardColors] = useState({
    lighterColor: "#dcf0d0",
    dominantColor: "#a6d28b",
    darkerColor: "#07a559",
  });

  const imgRef = useRef(null);

  const api = `https://www.googleapis.com/books/v1/volumes?q="${title}":intitle&maxResults=1&key=${
    import.meta.env.VITE_API_KEY
  }`;

  useEffect(() => {
    const getBookCover = async () => {
      try {
        const response = await axios.get(api);
        const book = response.data.items[0];
        const cover = book?.volumeInfo?.imageLinks?.thumbnail;
        setImage(cover);
      } catch (error) {
        console.error("Error fetching book cover:", error);
      }
    };
    // getBookCover();
  }, []);

  const { colors, dominantColor, darkerColor, lighterColor, loading, error } =
    useExtractColors(imgRef.current, { format: "hex" });
  console.log(`Dominant Color ${dominantColor} of ${image}`);

  useEffect(() => {
    if (colors) {
      setCardColors(colors);
    }
  }, [colors]);

  const lightColor = `${cardColors.lighterColor}55`;
  const mainColor = `${cardColors.dominantColor}aa`;
  const darkColor = cardColors.darkerColor;

  return (
    <div
      className="BookCard"
      style={{
        "--card-accent": darkColor,
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
        <img src={image} alt="Book Cover" ref={imgRef} />
      </div>
      <div className="BookCardContent">
        <h3>{title}</h3>
        <h4>{author}</h4>
        <div className="BookCardTags">
          <Tag tag={fiction ? "Fiction" : "Non Fiction"} color={mainColor} />
          {bestseller && <Tag tag="We Loved" color={mainColor} />}
          <Tag tag={genre} color={mainColor} />
        </div>
        <div className="BookCardCondition">
          <i className="fa-solid fa-book"></i>
          {condition}
        </div>
        <div className="BookCardFooter">
          <Category category={ageCategory} />
          <PriceButton
            price={price}
            color={mainColor}
            borderColor={darkColor}
          />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
