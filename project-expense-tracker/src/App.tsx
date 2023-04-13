import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenseList, setExpenseList] = useState([
    { description: "Milk", amount: 5, category: "Groceries" },
    { description: "Egg", amount: 10, category: "Groceries" },
    { description: "Electricity", amount: 5, category: "Utilities" },
  ]);
  const [categories, setCategories] = useState([
    "Groceries",
    "Utilities",
    "Entertainment",
  ]);

  return (
    <div>
      <ExpenseForm />

      <ExpenseFilter />

      <ExpenseList />
    </div>
  );
}

export default App;
