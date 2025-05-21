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
      <div id="search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" />
      </div>
    </nav>
  );
};

export default Navbar;
