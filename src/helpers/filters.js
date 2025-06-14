import data from "../assets/data/data_with_isbn.json";

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
  condition: (
    bookData,
    isNewChecked,
    isLikeNewChecked,
    isGoodChecked,
    isUsedChecked
  ) => {
    const filtererData = [];
    console.log(bookData);
    bookData.map((book) => {
      if (isNewChecked && book.condition === "New") filtererData.push(book);
      if (isLikeNewChecked && book.condition === "Like New")
        filtererData.push(book);
      if (isGoodChecked && book.condition === "Good") filtererData.push(book);

      if (isUsedChecked && book.condition === "Used") filtererData.push(book);
    });
    return filtererData;
  },
};

export default function handleFilters(filterInputs) {
  console.log(
    filters.condition(
      filters.fiction(...filterInputs.fiction),
      ...filterInputs.condition
    )
  );
  return filters.condition(
    filters.fiction(...filterInputs.fiction),
    ...filterInputs.condition
  );
  // console.log(...filterInputs.condition);
  // return filters.condition(
  //   filters.fiction(...filterInputs.fiction),
  //   filters.condition(...filterInputs.condition)
  // );
}
