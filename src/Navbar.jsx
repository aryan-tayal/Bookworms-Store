import { useRef } from "react";
import logo from "./assets/images/bookworms_logo.png";
import "./styles/Navbar.css";

const Navbar = ({ handleSearch }) => {
  const inputRef = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputRef.current.value);
  };
  return (
    <nav>
      <div id="NavbarBrandImg">
        <img src={logo} alt="Bookworms Logo" />
      </div>
      <h1 id="NavbarBrand">
        <span className="text-900">Bookworms</span> Store
      </h1>
      <form id="search" onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          onChange={handleFormSubmit}
          placeholder="Book Title or Author"
          ref={inputRef}
        />

        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
