import "./styles/BookCard.css";
import React, { useState, useEffect, useMemo } from "react";
import { Category, Tag, PriceButton } from "./Utils";
import { useExtractColors } from "react-extract-colors";
import { Link } from "react-router";

import "./styles/utils.css";

const colorCache = new Map();

const BookCard = ({ id, title, author, price, tags, bestseller, isbn }) => {
  const localSrc = `/covers/${id}.png`;
  const fallbackSrc = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
  const [image, setImage] = useState("");
  const [cardColors, setCardColors] = useState({
    lightColor: "#dcf0d0",
    mainColor: "#a6d28b",
    darkColor: "#07a559",
  });
  const rotation = useMemo(() => {
    const str = String(isbn ?? id ?? "");
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 33) ^ str.charCodeAt(i);
    }
    return `${(Math.abs(hash) % 50) - 25}deg`;
  }, [isbn, id]);

  const { colors, dominantColor, darkerColor, lighterColor } = useExtractColors(
    image,
    { format: "hex" },
  );

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
          onLoad={(e) => setImage(e.currentTarget.src)}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.onload = (ev) => setImage(ev.currentTarget.src);
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
          {tags.map((tag) => (
            <Tag tag={tag} color={cardColors.mainColor} />
          ))}

          {bestseller && (
            <Tag
              bestseller
              tag={<i className="fa-solid fa-heart"></i>}
              color="#d12009"
            />
          )}
        </div>
        <div className="BookCardFooter">
          <PriceButton
            price={price}
            color={cardColors.mainColor}
            borderColor={cardColors.darkColor}
          />
          <Link to={`/books/${id}`}>View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BookCard);
