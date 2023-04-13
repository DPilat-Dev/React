import React from "react";

const ExpenseList = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Example</th>
          <td>$5.00</td>
          <td>Entertainment</td>
          <td>
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">Total</th>
          <td>$5.00</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseList;
