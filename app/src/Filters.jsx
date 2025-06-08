import "./styles/Filters.css";

import { useEffect, useState } from "react";
const Filters = ({ handleFiltersChange }) => {
  const [isFictionChecked, setIsFictionChecked] = useState(true);
  const [isNonFictionChecked, setIsNonFictionChecked] = useState(true);
  const [areConditionsChecked, setAreConditionsChecked] = useState([
    true,
    true,
    true,
    true,
  ]);
  useEffect(() => {
    handleFiltersChange({
      fiction: [isFictionChecked, isNonFictionChecked],
      condition: areConditionsChecked,
    });
  }, [isFictionChecked, isNonFictionChecked, areConditionsChecked]);

  const resetFilters = () => {
    setIsFictionChecked(true);
    setIsNonFictionChecked(true);
    setAreConditionsChecked([true, true, true, true]);
  };
  return (
    <div className="FilterContainer">
      <div className="Filters">
        <h5>Filters</h5>
        <div className="FilterCategory">
          <h6>Fiction</h6>
          <div className="FilterCategoryInputs">
            <div className="FilterCategoryInput">
              <label htmlFor="fiction">Fiction</label>
              <input
                type="checkbox"
                checked={isFictionChecked}
                onChange={() => setIsFictionChecked(!isFictionChecked)}
                id="fiction"
                name="fiction"
              />
            </div>

            <div className="FilterCategoryInput">
              <label htmlFor="nonfiction">Non Fiction</label>
              <input
                type="checkbox"
                checked={isNonFictionChecked}
                id="nonfiction"
                name="fiction"
                onChange={() => setIsNonFictionChecked(!isNonFictionChecked)}
              />
            </div>
          </div>
        </div>
        <div className="FilterCategory">
          <h6>Condition</h6>
          <div className="FilterCategoryInputs">
            <div className="FilterCategoryInput">
              <label htmlFor="new">New</label>
              <input
                type="checkbox"
                checked={areConditionsChecked[0]}
                onChange={() =>
                  setAreConditionsChecked(
                    areConditionsChecked.map((c, i) => (i === 0 ? !c : c))
                  )
                }
                id="new"
                name="condition"
              />
            </div>
            <div className="FilterCategoryInput">
              <label htmlFor="likenew">Like New</label>
              <input
                type="checkbox"
                checked={areConditionsChecked[1]}
                id="likenew"
                name="condition"
                onChange={() =>
                  setAreConditionsChecked(
                    areConditionsChecked.map((c, i) => (i === 1 ? !c : c))
                  )
                }
              />
            </div>
            <div className="FilterCategoryInput">
              <label htmlFor="good">Good</label>
              <input
                type="checkbox"
                checked={areConditionsChecked[2]}
                id="good"
                name="condition"
                onChange={() =>
                  setAreConditionsChecked(
                    areConditionsChecked.map((c, i) => (i === 2 ? !c : c))
                  )
                }
              />
            </div>
            <div className="FilterCategoryInput">
              <label htmlFor="used">Used</label>
              <input
                type="checkbox"
                checked={areConditionsChecked[3]}
                id="used"
                name="condition"
                onChange={() =>
                  setAreConditionsChecked(
                    areConditionsChecked.map((c, i) => (i === 3 ? !c : c))
                  )
                }
              />
            </div>
          </div>
        </div>
        <button onClick={resetFilters} id="resetButton">
          Reset All Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
