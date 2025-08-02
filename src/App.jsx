import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import MainSection from "./MainSection";

import data from "./assets/data/data_with_isbn.json";

import handleSearchAndFilters from "./helpers/filters";
import InfoPage from "./InfoPage";

const App = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(true);
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
      {isInfoOpen ? (
        <InfoPage />
      ) : (
        <MainSection
          bookData={bookData}
          handleFiltersChange={handleFiltersChange}
        />
      )}
      <div id="infoCheckbox">
        <label htmlFor="infoPage">
          {isInfoOpen ? (
            <span>
              Start Browsing{" "}
              <i
                className="fa-solid fa-book"
                style={{ display: "inline-block", marginBottom: "-10px", marginLeft:"10px" }}
              ></i>
            </span>
          ) : (
            <span>
              How it Works <i className="fa-solid fa-question"></i>
            </span>
          )}
        </label>
        <input
          type="checkbox"
          id="infoPage"
          name="infoPage"
          checked={isInfoOpen}
          onChange={() => setIsInfoOpen(!isInfoOpen)}
        />
      </div>
    </div>
  );
};

export default App;
