import "./styles/InfoPage.css";
import { Link } from "react-router";
const InfoPage = () => {
  return (
    <div id="InfoPage">
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
          <h4>1</h4>
          <p>
            View our collection by clicking on the button in the bottom right
          </p>
        </div>
        <div className="step">
          <h4>2</h4>
          <p>Find books you like using the search and filter options</p>
        </div>
        <div className="step">
          <h4>3</h4>
          <p>
            Whatsapp us the titles you would like to buy on our number{" "}
            <span>8818010567</span>
          </p>
        </div>
        <div className="step">
          <h4>4</h4>
          <p>The books will be delivered to you shortly</p>
        </div>
      </section>
      <div className="browseBooks">
        <Link to="/books">Browse Books</Link>
      </div>
    </div>
  );
};

export default InfoPage;
