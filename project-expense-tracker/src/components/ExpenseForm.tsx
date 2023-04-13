import React from "react";

const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          className="form-control"
          placeholder="Description......"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          className="form-control"
          placeholder="Amount"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category">Category</label>
        <select id="category" className="form-select">
          <option></option>
        </select>
      </div>
      <button className="btn btn-primary " type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
