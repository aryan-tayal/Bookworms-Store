const Category = ({ category }) => (
  <div className="category">
    <i className="fa-solid fa-circle-user"></i>
    <span>{category}</span>
  </div>
);

const Tag = ({ tag, color, bestseller }) => (
  <span
    className={`tag ${bestseller && "bestseller"}`}
    style={{ backgroundColor: color }}
  >
    {tag}
  </span>
);

const PriceButton = ({ price, color, borderColor }) => (
  <div
    className="price-button"
    style={{ backgroundColor: color, borderColor: borderColor }}
  >
    <i className="fa-solid fa-indian-rupee-sign"></i> {price}
  </div>
);

const Stars = ({ rating }) => (
  <div className="stars">
    <div className="stars-back">
      <i className="fa-solid fa-star" key={1}></i>
      <i className="fa-solid fa-star" key={2}></i>
      <i className="fa-solid fa-star" key={3}></i>
      <i className="fa-solid fa-star" key={4}></i>
      <i className="fa-solid fa-star" key={5}></i>
    </div>
    <div
      className="stars-coloured"
      style={{
        width: `${(rating / 5) * 100}%`,
      }}
    >
      <i className="fa-solid fa-star" key={6}></i>
      <i className="fa-solid fa-star" key={7}></i>
      <i className="fa-solid fa-star" key={8}></i>
      <i className="fa-solid fa-star" key={9}></i>
      <i className="fa-solid fa-star" key={10}></i>
    </div>
  </div>
);

export { Category, Tag, PriceButton, Stars };
