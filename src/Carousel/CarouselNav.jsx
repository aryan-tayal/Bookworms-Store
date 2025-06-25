import CarouselNavButton from "./CarouselNavButton";

const CarouselNav = ({ cardGroup, currentPage, changeCardPage }) => {
  e.log(cardGroup);
  return (
    <div>
      {cardGroup.map((c, i) => (
        <CarouselNavButton
          key={i}
          active={currentPage === i}
          i={i}
          handleClick={() => changeCardPage(i)}
        />
      ))}
    </div>
  );
};

export default CarouselNav;
