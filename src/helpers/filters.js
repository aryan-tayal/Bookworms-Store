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
  fiction: (bookData, isFictionChecked, isNonFictionChecked) => {
    const filtererData = [];
    bookData.map((book) => {
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
    bookData.map((book) => {
      if (isNewChecked && book.condition === "New") filtererData.push(book);
      if (isLikeNewChecked && book.condition === "Like New")
        filtererData.push(book);
      if (isGoodChecked && book.condition === "Good") filtererData.push(book);

      if (isUsedChecked && book.condition === "Used") filtererData.push(book);
    });
    return filtererData;
  },
  age: (
    bookData,
    isUnder10Checked,
    isAbove10Checked,
    isYoungAdultChecked,
    isAdultChecked,
    isAllChecked
  ) => {
    const filtererData = [];
    bookData.map((book) => {
      if (isUnder10Checked && book.ageCategory === "Under 10")
        filtererData.push(book);
      if (isAbove10Checked && book.ageCategory === "Above 10")
        filtererData.push(book);
      if (isYoungAdultChecked && book.ageCategory === "Young Adult")
        filtererData.push(book);
      if (isAdultChecked && book.ageCategory === "Adult")
        filtererData.push(book);
      if (isAllChecked && book.ageCategory === "All") filtererData.push(book);
    });
    return filtererData;
  },
  bestseller: (bookData, isBestsellerChecked) => {
    console.log(bookData.filter((book) => book.bestseller));
    return isBestsellerChecked
      ? bookData.filter((book) => book.bestseller)
      : bookData;
  },
};

export default function handleSearchAndFilters(searchTerm, filterInputs) {
  return filters.bestseller(
    filters.age(
      filters.condition(
        filters.fiction(search(searchTerm), ...filterInputs.fiction),
        ...filterInputs.condition
      ),
      ...filterInputs.age
    ),
    filterInputs.bestseller
  );
}
