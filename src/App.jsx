import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import MainSection from "./MainSection";
import InfoPage from "./InfoPage";
import Home from "./Home";
import ContactPage from "./ContactPage";

import data from "./assets/data/data_with_isbn.json";

import { BrowserRouter, Routes, Route, Link } from "react-router";

import handleSearchAndFilters from "./helpers/filters";
import Sidebar from "./Sidebar";

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

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/books"
            element={
              <MainSection
                bookData={bookData}
                handleFiltersChange={handleFiltersChange}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
        <Sidebar />
      </BrowserRouter>
      {/* <MainSection
        bookData={bookData}
        handleFiltersChange={handleFiltersChange}
      /> */}
      {/* <Link href="/">Info Page</Link> */}
      {/* <div id="infoCheckbox">
        <label htmlFor="infoPage">
          {isInfoOpen ? (
            <span>
              Start Browsing{" "}
              <i
                className="fa-solid fa-book"
                style={{
                  display: "inline-block",
                  marginBottom: "-10px",
                  marginLeft: "10px",
                }}
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
      </div> */}
    </div>
  );
};

export default App;
