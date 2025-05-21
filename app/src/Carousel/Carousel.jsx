import CarouselCardGroup from "./CarouselCardGroup";
import CarouselNav from "./CarouselNav";

import "../styles/Carousel/Carousel.css";

import { useState } from "react";

const carouselData = [
  {
    bookCover:
      "https://m.media-amazon.com/images/I/815qVQVm0QL._AC_UF1000,1000_QL80_.jpg",
    bookTitle: "Book Title 1",
    bookAuthor: "Book Title",
    bookBlurb:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit quod velit, voluptatum illo quidem ab rem minima sapiente deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et modi corrupti repellendus magni totam dolor accusamus incidunt nostrum, dolorum a voluptatem dolorem autem placeat tempore error saepe deserunt sed officiis numquam! Porro vitae est quis ullam suscipit quo dolorem eius expedita nobis officiis eos, natus similique sit modi vero.",
    bookCategory: "Young Adult",
    price: 125,
    bgcolor: "#FCE5D8",
    color: "#f5b998",
  },
  {
    bookCover:
      "https://m.media-amazon.com/images/I/815qVQVm0QL._AC_UF1000,1000_QL80_.jpg",
    bookTitle: "Book Title 2",
    bookAuthor: "Book Title",
    bookBlurb:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit quod velit, voluptatum illo quidem ab rem minima sapiente deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et modi corrupti repellendus magni totam dolor accusamus incidunt nostrum, dolorum a voluptatem dolorem autem placeat tempore error saepe deserunt sed officiis numquam! Porro vitae est quis ullam suscipit quo dolorem eius expedita nobis officiis eos, natus similique sit modi vero.",
    bookCategory: "Young Adult",
    price: 125,
    bgcolor: "#FFE66D",
    color: "#FAB925",
  },
  {
    bookCover:
      "https://m.media-amazon.com/images/I/815qVQVm0QL._AC_UF1000,1000_QL80_.jpg",
    bookTitle: "Book Title 3",
    bookAuthor: "Book Title",
    bookBlurb:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit quod velit, voluptatum illo quidem ab rem minima sapiente deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et modi corrupti repellendus magni totam dolor accusamus incidunt nostrum, dolorum a voluptatem dolorem autem placeat tempore error saepe deserunt sed officiis numquam! Porro vitae est quis ullam suscipit quo dolorem eius expedita nobis officiis eos, natus similique sit modi vero.",
    bookCategory: "Young Adult",
    price: 125,
    bgcolor: "#C2E6FB",
    color: "#83c1e6",
  },
  {
    bookCover:
      "https://m.media-amazon.com/images/I/815qVQVm0QL._AC_UF1000,1000_QL80_.jpg",
    bookTitle: "Book Title 4",
    bookAuthor: "Book Title",
    bookBlurb:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit quod velit, voluptatum illo quidem ab rem minima sapiente deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et modi corrupti repellendus magni totam dolor accusamus incidunt nostrum, dolorum a voluptatem dolorem autem placeat tempore error saepe deserunt sed officiis numquam! Porro vitae est quis ullam suscipit quo dolorem eius expedita nobis officiis eos, natus similique sit modi vero.",
    bookCategory: "Young Adult",
    price: 125,
    bgcolor: "#FCE5D8",
    color: "#f5b998",
  },
  {
    bookCover:
      "https://m.media-amazon.com/images/I/815qVQVm0QL._AC_UF1000,1000_QL80_.jpg",
    bookTitle: "Book Title 5",
    bookAuthor: "Book Title",
    bookBlurb:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit quod velit, voluptatum illo quidem ab rem minima sapiente deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et modi corrupti repellendus magni totam dolor accusamus incidunt nostrum, dolorum a voluptatem dolorem autem placeat tempore error saepe deserunt sed officiis numquam! Porro vitae est quis ullam suscipit quo dolorem eius expedita nobis officiis eos, natus similique sit modi vero.",
    bookCategory: "Young Adult",
    price: 125,
    bgcolor: "#FFE66D",
    color: "#FAB925",
  },
  {
    bookCover:
      "https://m.media-amazon.com/images/I/815qVQVm0QL._AC_UF1000,1000_QL80_.jpg",
    bookTitle: "Book Title 6",
    bookAuthor: "Book Title",
    bookBlurb:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit quod velit, voluptatum illo quidem ab rem minima sapiente deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et modi corrupti repellendus magni totam dolor accusamus incidunt nostrum, dolorum a voluptatem dolorem autem placeat tempore error saepe deserunt sed officiis numquam! Porro vitae est quis ullam suscipit quo dolorem eius expedita nobis officiis eos, natus similique sit modi vero.",
    bookCategory: "Young Adult",
    price: 125,
    bgcolor: "#C2E6FB",
    color: "#83c1e6",
  },
];

const Carousel = () => {
  const [cardPage, setCardPage] = useState(0);
  const chunkToThree = (arr) =>
    arr.reduce(
      (r, e, i) => (i % 3 ? r[r.length - 1].push(e) : r.push([e])) && r,
      []
    );
  return (
    <div id="carousel">
      {chunkToThree(carouselData).map((group, i) => (
        <CarouselCardGroup key={i} group={group} active={i === cardPage} />
      ))}
      <CarouselNav
        cardGroup={chunkToThree(carouselData)}
        currentPage={cardPage}
        changeCardPage={setCardPage}
      />
    </div>
  );
};

export default Carousel;
