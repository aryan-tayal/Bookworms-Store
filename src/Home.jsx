import "./styles/Home.css";
import { Link } from "react-router";

const Home = () => {
  return (
    <div id="Home">
      <main>
        <h1>Welcome to our Bookstore!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
          adipisci perspiciatis libero accusantium harum corporis placeat
          quibusdam consequuntur iure id!
        </p>
      </main>
      <section id="infoSteps">
        <div className="step">
          <h4>
            <i className="fa-solid fa-question"></i>
          </h4>
          <h5>How it Works?</h5>
          <Link to="/info">
            <p>Learn how to use our website</p>
          </Link>
        </div>
        <div className="step">
          <h4>
            <i className="fa-solid fa-address-book"></i>
          </h4>
          <h5>Contact Us</h5>
          <Link to="/contact">
            <p>Contact us with queries or suggestions</p>
          </Link>
        </div>
      </section>
      <div className="browseBooks">
        <Link to="/books">Browse Books</Link>
      </div>
    </div>
  );
};

export default Home;
