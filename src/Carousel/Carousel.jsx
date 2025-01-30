import { useState } from "react";
import CarouselCard from "./CarouselCard";

import "../styles/Carousel/Carousel.css";

const carouselData = [
  {
    bookCover:
      "https://m.media-amazon.com/images/I/815qVQVm0QL._AC_UF1000,1000_QL80_.jpg",
    bookTitle: "Book Title",
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
    bookTitle: "Book Title",
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
    bookTitle: "Book Title",
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
    bookTitle: "Book Title",
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
    bookTitle: "Book Title",
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
    bookTitle: "Book Title",
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
  const [pageDisplayed, setPageDisplayed] = useState(1);
  return (
    <div id="carousel">
      {carouselData.map((book, i) => {
        if (i === pageDisplayed) {
          return <CarouselCard key={i} {...book} />;
        }
        if (
          (pageDisplayed === 0 && i === carouselData.length - 1) ||
          i === pageDisplayed - 1 ||
          i === pageDisplayed + 1
        ) {
          return <CarouselCard key={i} {...book} neighbour={true} />;
        } else {
          return <CarouselCard key={i} {...book} hide={true} />;
        }
      })}
    </div>
  );
};

export default Carousel;
