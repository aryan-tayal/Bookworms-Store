import "./styles/Home.css";
import { Link } from "react-router";
import { Tag } from "./Utils";
import qr from "./assets/images/payment-qr.jpeg";

const Home = () => {
  return (
    <div id="Home">
      <main>
        <h1>Welcome to our Bookstore!</h1>
        <div id="paymentContainer">
          <h2>Pay Here</h2>
          <img src={qr} alt="QR Code for payments" />
        </div>
        <p>
          Bookworms Pre-Loved Bookstore holds books we have hand-picked, read
          and loved. Look for{" "}
          <Tag
            bestseller={true}
            tag={<i className="fa-solid fa-heart"></i>}
            color={"#d12009"}
          />{" "}
          to pick books we LOVE LOVE LOVE, and join us read..
        </p>
      </main>
      <section className="step-grid">
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
