import { useState } from "react";

import CarouselCard from "./CarouselCard";
import "../styles/Carousel/CarouselCardGroup.css";

const CarouselCardGroup = ({ group, active }) => {
  const [cardDisplayed, setCardDisplayed] = useState(1);
  return (
    <div className={`CarouselCardGroup ${active && "active"}`}>
      {group.map((book, i) => (
        <CarouselCard
          key={i}
          {...book}
          handleCardClick={() => setCardDisplayed(i)}
          active={i === cardDisplayed}
        />
      ))}
    </div>
  );
};

export default CarouselCardGroup;
