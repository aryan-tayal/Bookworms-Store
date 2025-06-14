import { useState } from "react";

import Navbar from "./Navbar";
import MainSection from "./MainSection";

import data from "./assets/data/data_with_isbn.json";

import handleFilters, { search } from "./helpers/filters";

const App = () => {
  const [bookData, setBookData] = useState(data);

  const handleSearch = (searchQuery) => {
    setBookData(search(searchQuery));
  };
  const handleFiltersChange = (filters) => {
    setBookData(handleFilters(filters));
  };

  return (
    <div>
      <Navbar handleSearch={handleSearch} />
      <MainSection
        bookData={bookData}
        handleFiltersChange={handleFiltersChange}
      />
    </div>
  );
};

export default App;
