import React, { useState } from "react";
import ExpenseItem from "../expense-item/index";

function ExpenseList({ expenses }) {
  return (
    <>
      <ul>
        {expenses.map((expense) => {
          return <ExpenseItem expense={expense} />;
        })}
      </ul>
      {expenses.length > 0 && <button>Clear Expenses</button>}
    </>
  );
}

export default ExpenseList;
