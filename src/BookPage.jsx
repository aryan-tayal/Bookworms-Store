import { useParams } from "react-router";
import data from "./assets/data/data_with_isbn.json";
import { useState } from "react";
const BookPage = () => {
  let { id } = useParams();
  const [book, setBook] = useState(data.filter((b) => b.id === parseInt(id)));
  return <div>{book.title}</div>;
};

export default BookPage;
