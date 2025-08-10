import { Link } from "react-router";
import "./styles/Sidebar.css"
const Sidebar = () => {
  return (
    <aside>
      <div>
        <Link to="/">
          <i className="fa-solid fa-house"></i>
        </Link>
      </div>
      <div>
        <Link to="/books">
          <i className="fa-solid fa-book"></i>
        </Link>
      </div>
      <div>
        <Link to="/info">
          <i className="fa-solid fa-question"></i>
        </Link>
      </div>
      <div>
        <Link to="/contact">
          <i className="fa-solid fa-address-book"></i>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
