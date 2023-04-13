import React from "react";

const ExpenseFilter = () => {
  return (
    <div className="mt-3 md-3">
      <select id="category" className="form-select">
        <option>All categories</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
