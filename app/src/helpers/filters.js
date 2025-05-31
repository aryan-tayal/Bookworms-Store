import data from "../data.json";

export const search = (searchTerm) => {
  const filtererData = [];
  data.map((book) => {
    if (
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      filtererData.push(book);
    }
  });
  return filtererData;
};

export const filters = {
  fiction: (isFictionChecked, isNonFictionChecked) => {
    const filtererData = [];
    data.map((book) => {
      if (isFictionChecked && book.fiction) {
        filtererData.push(book);
      }
      if (isNonFictionChecked && !book.fiction) {
        filtererData.push(book);
      }
    });
    return filtererData;
  },
};
