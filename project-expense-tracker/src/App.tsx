import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";
import categories from "./categories";

interface expense {
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [expenseList, setExpenseList] = useState([
    { id: 1, description: "Milk", amount: 5, category: "Groceries" },
    { id: 2, description: "Egg", amount: 10, category: "Groceries" },
    { id: 3, description: "Electricity", amount: 5, category: "Utilities" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenseList.filter((e) => e.category === selectedCategory)
    : expenseList;

  const handleSubmit = () => {
    console.log("");
  };

  return (
    <div>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenseList([
            ...expenseList,
            { ...expense, id: expenseList.length + 1 },
          ])
        }
      />

      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />

      <ExpenseList
        expenseList={visibleExpenses}
        onDelete={(id) =>
          setExpenseList(expenseList.filter((expence) => expence.id !== id))
        }
      />
    </div>
  );
}

export default App;
