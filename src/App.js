import React, { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/expense-form/index";
import ExpenseList from "./components/expense-list/index";

const regularExpenses = [
  { description: "Mortgage", amount: 700 },
  { description: "Phone Bill", amount: 52 },
];

function App() {
  const [expenses, setExpenses] = useState(regularExpenses);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description !== "" && amount > 0) {
      const singleExpense = { description, amount };
      setExpenses([...expenses, singleExpense]);
      setDescription("");
      setAmount("");
    } else {
      return alert("please enter description & value");
    }
  };

  return (
    <div className="budget-app">
      <h1>Budget Calculator</h1>
      <ExpenseForm
        description={description}
        amount={amount}
        handleAmount={handleAmount}
        handleDescription={handleDescription}
        handleSubmit={handleSubmit}
      />
      <ExpenseList expenses={expenses} />
      <h2>
        Total Spending: £
        {expenses.reduce((acc, cur) => {
          return (acc += parseInt(cur.amount));
        }, 0)}
      </h2>
    </div>
  );
}

export default App;
