import "./styles/BookCard.css";
import React, { useState, useEffect, useRef, useMemo } from "react";
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
  const colorCache = new Map();
  const [image, setImage] = useState("");
  const [cardColors, setCardColors] = useState({
    lightColor: "#dcf0d0",
    mainColor: "#a6d28b",
    darkColor: "#07a559",
  });
  const rotation = useMemo(() => {
    const hash = [...id].reduce((a, c) => a + c.charCodeAt(0), 0);
    return `${(hash % 30) - 15}deg`;
  }, [id]);
  // 🔹 Main function to get book cover

  // 🎨 Extract colors from image
  const { colors, dominantColor, darkerColor, lighterColor } =
    useExtractColors(image, { format: "hex" });

useEffect(() => {
  if (!image || colors.length === 0) return;

  if (colorCache.has(image)) {
    setCardColors(colorCache.get(image));
    return;
  }

  const palette = {
    mainColor: `${dominantColor}aa`,
    lightColor: `${lighterColor}55`,
    darkColor: darkerColor,
  };

  colorCache.set(image, palette);
  setCardColors(palette);
}, [image, colors, dominantColor, lighterColor, darkerColor]);

  // 🖼️ Render
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
          transform: `rotate(${rotation})`,
        }}
      >
        <img
        src={localSrc}
        onError={(e) => {
          e.currentTarget.onerror = null; // prevent infinite loop
          e.currentTarget.src = fallbackSrc;
        }}
        loading="lazy"
        decoding="async"
        alt={`${title} cover`}
        />
      </div>

      <div className="BookCardContent">
        <h3>{title}</h3>
        <h4>{author}</h4>

        <div className="BookCardTags">
          <Tag
            tag={fiction ? "Fiction" : "Non-Fiction"}
            color={cardColors.mainColor}
          />
          <Tag tag={genre || "Novel"} color={cardColors.mainColor} />
          {bestseller && (
            <Tag
              bestseller
              tag={<i className="fa-solid fa-heart"></i>}
              color="#d12009"
            />
          )}
        </div>

        <div className="BookCardCondition">
          <i className="fa-solid fa-book"></i> {condition}
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

export default React.memo(BookCard);
