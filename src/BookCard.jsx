import "./styles/BookCard.css";
import { useState, useEffect, useRef } from "react";
import { Category, Tag, PriceButton } from "./Utils";
import { useExtractColors } from "react-extract-colors";

const BookCard = ({
  id,
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
  const coverRotation = useRef(`${Math.floor(Math.random() * 30) - 15}deg`);
  const path = `./assets/images/covers/${id}`
  const [image, setImage] = useState("");
  const [cardColors, setCardColors] = useState({
    lightColor: "#dcf0d0",
    mainColor: "#a6d28b",
    darkColor: "#07a559",
  });
  const getBookCover = async () => {
      const image = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
      if (image) {
        setImage(image);
      }
    };
  useEffect(() => {
      fetch(path)
      .then((res) => {
        if (res.ok) {
          setImage(path);
        } else {
          getBookCover();
        }
      })
      .catch(() => {
       console.error('no image')
      });
  }, []);

  

  const { colors, dominantColor, darkerColor, lighterColor, loading, error } =
    useExtractColors(image, { format: "hex" });

  useEffect(() => {
    if (colors.length !== 0) {
      setCardColors({
        mainColor: `${dominantColor}aa`,
        lightColor: `${lighterColor}55`,
        darkColor: darkerColor,
      });
    }
  }, [colors, dominantColor, darkerColor, lighterColor]);

  return (
    <div
      className="BookCard"
      style={{
        "--card-accent": cardColors.darkColor,
        "--card-main": cardColors.mainColor,
        "--card-light": cardColors.lightColor,
      }}
    >
      <div
        className="BookCardImg"
        style={{
          transform: `rotate(${coverRotation.current})`,
        }}
      >
       <img src={path} onError={(e)=>{e.target.onError = null; e.target.src = image}}/>
      </div>
      <div className="BookCardContent">
        <h3>{title}</h3>
        <h4>{author}</h4>
        <div className="BookCardTags">
          <Tag
            tag={fiction ? "Fiction" : "Non Fiction"}
            color={cardColors.mainColor}
          />
          <Tag tag={genre ? genre : "Novel"} color={cardColors.mainColor} />
          {bestseller && (
            <Tag
              bestseller={true}
              tag={<i className="fa-solid fa-heart"></i>}
              color={"#d12009"}
            />
          )}
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
