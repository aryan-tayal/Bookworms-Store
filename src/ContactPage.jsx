import "./styles/Contact.css";
import { Link } from "react-router";
const ContactPage = () => {
  return (
    <div id="contactPage">
      <main>
        <h1>How to Contact Us?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
          adipisci perspiciatis libero accusantium harum corporis placeat
          quibusdam consequuntur iure id!
        </p>
      </main>
      <div className="browseBooks" style={{ marginTop: 30 }}>
        <Link to="/books">Browse Books</Link>
      </div>
    </div>
  );
};

export default ContactPage;
