import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import ExpenseForm from "./components/expense-form/index";
import ExpenseList from "./components/expense-list/index";

const regularExpenses = [
  { id: uuidv4(), description: "Mortgage", amount: 700 },
  { id: uuidv4(), description: "Phone Bill", amount: 52 },
];

function App() {
  const [expenses, setExpenses] = useState(regularExpenses);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, description, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
      } else {
        const singleExpense = { id: uuidv4(), description, amount };
        setExpenses([...expenses, singleExpense]);
      }
      setDescription("");
      setAmount("");
    } else {
      return alert("please enter description & value");
    }
  };

  const clearList = () => {
    setExpenses([]);
  };

  const handleDelete = (id) => {
    let tempExpenses = expenses.filter((listItem) => listItem.id !== id);
    setExpenses(tempExpenses);
  };

  const handleEdit = (id) => {
    let expense = expenses.find((listItem) => listItem.id === id);
    let { description, amount } = expense;
    setDescription(description);
    setAmount(amount);
    setEdit(true);
    setId(id);
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
        edit={edit}
      />
      <ExpenseList
        expenses={expenses}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        clearList={clearList}
      />
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
