import { useState } from "react";

import Navbar from "./Navbar";
import Carousel from "./Carousel/Carousel";
import MainSection from "./MainSection";

import data from "./data.json";

import handleFilters, { search, filters } from "./helpers/filters";

const App = () => {
  const [bookData, setBookData] = useState(data);

  const handleSearch = (searchQuery) => {
    setBookData(search(searchQuery));
  };
  // const handleFilters = {
  //   handleFiction: (isFictionChecked, isNonFictionChecked) => {
  //     setBookData(filters.fiction(isFictionChecked, isNonFictionChecked));
  //   },
  //   handleGenre:()=>{

  //   }
  // };

  const handleFiltersChange = (filters) => {
    setBookData(handleFilters(filters));
  };

  return (
    <div>
      <Navbar handleSearch={handleSearch} />
      {/* <Carousel /> */}
      <MainSection
        bookData={bookData}
        handleFiltersChange={handleFiltersChange}
      />

      {/* 
        <BookCard image="https://m.media-amazon.com/images/I/910vYI-gm0L._AC_UF1000,1000_QL80_.jpg   " />
        <BookCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUXAuA2hnU75TTtWoi-4XV9ybirWWKPh4jdw&s" />
        <BookCard image="https://m.media-amazon.com/images/I/91RQ5d-eIqL._AC_UF1000,1000_QL80_.jpg" /> */}
    </div>
  );
};

export default App;
