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
  isbn,
}) => {
  const [image, setImage] = useState("");
  const [cardColors, setCardColors] = useState({
    lightColor: "#dcf0d0",
    mainColor: "#a6d28b",
    darkColor: "#07a559",
  });

  const imgRef = useRef(null);

  const api = `https://www.googleapis.com/books/v1/volumes?q="${title}":intitle&maxResults=1&key=${
    import.meta.env.VITE_API_KEY
  }`;

  useEffect(() => {
    const getBookCover = async () => {
      const image = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
      if (image) {
        setImage(image);
      }
    };
    getBookCover();
  }, []);

  const { colors, dominantColor, darkerColor, lighterColor, loading, error } =
    useExtractColors(image, { format: "hex" });
  // console.log(`Dominant Color ${dominantColor} of ${image}`);

  useEffect(() => {
    if (colors) {
      setCardColors({
        mainColor: `${dominantColor}aa`,
        lightColor: `${lighterColor}55`,
        darkColor: darkerColor,
      });
    }
  }, [colors, dominantColor, darkerColor,lighterColor]);

  // const lightColor = `${cardColors.lighterColor}55`;
  // const mainColor = `${cardColors.dominantColor}aa`;
  // const darkColor = cardColors.darkerColor;

  // console.log(darkColor);

  return (
    <div
      className="BookCard"
      style={{
        "--card-accent": cardColors.darkColor,
        "--card-main": cardColors.mainColor,
        "--card-light": cardColors.lightColor,
      }}
    >
      {/* <div className="BookCardBg" tabIndex={-1}></div> */}
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
          <Tag tag={fiction ? "Fiction" : "Non Fiction"} color={cardColors.mainColor} />
          {bestseller && <Tag tag="We Loved" color={cardColors.mainColor} />}
          <Tag tag={genre ? genre : "Novel"} color={cardColors.mainColor} />
        </div>
        <div className="BookCardCondition">
          <i className="fa-solid fa-book"></i>
          {condition}
        </div>
        <div className="BookCardFooter">
          <Category category={ageCategory} />
          <PriceButton
            price={price}
            color={cardColors.mainColor}
            borderColor={cardColors.darkColor}
          />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
