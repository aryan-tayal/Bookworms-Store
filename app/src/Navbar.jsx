import logo from "./assets/images/bookworms_logo.png";
import "./styles/NavBar.css";

const Navbar = () => {
  return (
    <nav>
      <div id="NavbarBrandImg">
        <img src={logo} alt="Bookworms Logo" />
      </div>
      <h1 id="NavbarBrand">
        <span className="text-900">Bookworms</span> Store
      </h1>
      <form id="search">
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          placeholder="Book Title or Author"
        />

        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
