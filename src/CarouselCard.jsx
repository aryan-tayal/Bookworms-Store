import "./styles/CarouselCard.css";

const CarouselCard = () => {
  return (
    <div className="CarouselCard active" style={{ backgroundColor: "#FCF18D" }}>
      <div className="CarouselCardImg">
        <img
          src="https://m.media-amazon.com/images/I/815qVQVm0QL.jpg"
          alt="Book Cover"
        />
      </div>
      <div className="CarouselCardContent">
        <h2 className="CarouselCardTitle text-700">Book Title</h2>
        <h3 className="CarouselCardAuthor">Book Author</h3>
        <p className="CarouselCardBlurb">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          reprehenderit quod velit, voluptatum illo quidem ab rem minima
          sapiente deleniti. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsam et modi corrupti repellendus magni totam dolor accusamus
          incidunt nostrum, dolorum a voluptatem dolorem autem placeat tempore
          error saepe deserunt sed officiis numquam! Porro vitae est quis ullam
          suscipit quo dolorem eius expedita nobis officiis eos, natus similique
          sit modi vero.
        </p>
        <div className="category">
          <i className="fa-solid fa-circle-user"></i>
          <span>Young Adults</span>
        </div>
        <div className="price-button" style={{ backgroundColor: "#FAB826" }}>
          <i className="fa-solid fa-indian-rupee-sign"></i> 125
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
