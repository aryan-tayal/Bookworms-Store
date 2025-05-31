import "./styles/Filters.css";

import { useEffect, useState } from "react";
const Filters = ({ handleFilters }) => {
  const [isFictionChecked, setIsFictionChecked] = useState(true);
  const [isNonFictionChecked, setIsNonFictionChecked] = useState(true);
  useEffect(() => {
    handleFilters.handleFiction(isFictionChecked, isNonFictionChecked);
  }, [isFictionChecked, isNonFictionChecked]);
  return (
    <div className="FilterContainer">
      <div className="Filters">
        Filters
        <div className="FilterCategory">
          <h6>Fiction</h6>
          <label htmlFor="fiction">Fiction</label>
          <input
            type="checkbox"
            checked={isFictionChecked}
            onClick={() => setIsFictionChecked(!isFictionChecked)}
            id="fiction"
            name="fiction"
          />
          <label htmlFor="nonfiction">Non Fiction</label>
          <input
            type="checkbox"
            checked={isNonFictionChecked}
            id="nonfiction"
            name="fiction"
            onClick={() => setIsNonFictionChecked(!isNonFictionChecked)}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
