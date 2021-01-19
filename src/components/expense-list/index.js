import React from "react";
import ExpenseItem from "../expense-item/index";

function ExpenseList({ expenses, handleEdit, handleDelete, clearList }) {
  return (
    <>
      <ul>
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button onClick={clearList}>Clear Expenses</button>
      )}
    </>
  );
}

export default ExpenseList;
