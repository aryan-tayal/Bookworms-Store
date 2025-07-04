const Category = ({ category }) => (
  <div className="category">
    <i className="fa-solid fa-circle-user"></i>
    <span>{category}</span>
  </div>
);

const Tag = ({ tag, color, bestseller }) => (
  <span className={`tag ${bestseller && "bestseller"}`} style={{ backgroundColor: color }}>
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

export { Category, Tag, PriceButton };
