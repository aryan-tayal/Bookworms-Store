import "./styles/Contact.css";
import { Link } from "react-router";
const ContactPage = () => {
  return (
    <div id="contactPage">
      <main>
        <h1>How to Contact Us?</h1>
        <p>
          1. Whatsapp us about anything books at{" "}
          <b style={{ fontWeight: 800 }}>8818010567</b>
          <br />
          2. You can share your book reviews / suggest new titles and also offer
          suggestions on how our bookstore can be used.
        </p>
      </main>
      <div className="browseBooks" style={{ marginTop: 30 }}>
        <Link to="/books">Browse Books</Link>
      </div>
    </div>
  );
};

export default ContactPage;
