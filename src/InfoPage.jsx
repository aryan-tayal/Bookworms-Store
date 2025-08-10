import "./styles/InfoPage.css";
import { Link } from "react-router";
const InfoPage = () => {
  return (
    <div id="InfoPage">
      <main>
        <h1>How it Works?</h1>
      </main>
      <section className="step-grid">
        <div className="step">
          <h4>1</h4>
          <p>
            Save our number Bookworms{" "}
            <b style={{ fontWeight: 800 }}>8818010567</b>
          </p>
        </div>
        <div className="step">
          <h4>2</h4>
          <p>Choose the books you like from here</p>
        </div>
        <div className="step">
          <h4>3</h4>
          <p>Whatsapp their names or screenshots, whatever works for you</p>
        </div>
        <div className="step">
          <h4>4</h4>
          <p>
            Wait for our confirmation before paying online on the same number
            (delivery charge is Rs.50 anywhere within Hisar)
          </p>
        </div>
        <div className="step">
          <h4>5</h4>
          <p>
            You can pay in cash if you pickup at the bookstore. Book sets will
            be held for 2 days after confirmation, before being put back on the
            list of the bookstore
          </p>
        </div>
        <div className="step">
          <h4>6</h4>
          <p>Enjoy your reads</p>
        </div>
      </section>
      <main>
        <h1>How to get involved with Bookworms.</h1>
      </main>
      <section className="step-grid">
        <div className="step">
          <h4>1</h4>
          <p>You can donate your books to us after you finish reading.</p>
        </div>
        <div className="step">
          <h4>2</h4>
          <p>Within 2 business days, you will get a store credit from us.</p>
        </div>
        <div className="step">
          <h4>3</h4>
          <p>Use the store credit to buy books that you havenot read.</p>
        </div>
        <div className="step">
          <h4>4</h4>
          <p>
            Please note : our decision if final about the credit that can be
            offered.
          </p>
        </div>
      </section>
      <div className="browseBooks">
        <Link to="/books">Browse Books</Link>
      </div>
    </div>
  );
};

export default InfoPage;
