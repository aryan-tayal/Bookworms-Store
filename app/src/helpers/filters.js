import data from "../data.json";

export const search = (searchTerm) => {
  const filtererData = [];
  data.map((book) => {
    if (book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase())) {
      filtererData.push(book);
    }
  });
  return filtererData;
};
