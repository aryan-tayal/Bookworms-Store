import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import MainSection from "./MainSection";

import data from "./assets/data/data_with_isbn.json";

import handleSearchAndFilters from "./helpers/filters";

const App = () => {
  const [bookData, setBookData] = useState(data);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    fiction: [true, true],
    condition: [true, true, true, true],
    age: [true, true, true, true, true],
    bestseller: false,
  });
  const handleSearch = (searchQuery) => {
    setSearch(searchQuery);
  };
  const handleFiltersChange = (filterInputs) => {
    setFilters(filterInputs);
  };
  useEffect(() => {
    setBookData(handleSearchAndFilters(search, filters));
  }, [filters, search]);

  return (
    <div>
      <Navbar handleSearch={handleSearch} search={search} />
      <MainSection
        bookData={bookData}
        handleFiltersChange={handleFiltersChange}
      />
    </div>
  );
};

export default App;
