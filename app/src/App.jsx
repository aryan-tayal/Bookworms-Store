import Navbar from "./Navbar";
import Carousel from "./Carousel/Carousel";
import BookCard from "./BookCard";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Carousel /> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gap:"20px",
          marginTop: "100px",
        }}
      >
        <BookCard image="https://m.media-amazon.com/images/I/910vYI-gm0L._AC_UF1000,1000_QL80_.jpg   " />
        <BookCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUXAuA2hnU75TTtWoi-4XV9ybirWWKPh4jdw&s" />
        <BookCard image="https://m.media-amazon.com/images/I/91RQ5d-eIqL._AC_UF1000,1000_QL80_.jpg" />
      </div>
    </div>
  );
};

export default App;
