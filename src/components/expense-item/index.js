import React from "react";

function ExpenseItem({ expense, handleEdit, handleDelete }) {
  const { id, description, amount } = expense;
  return (
    <li>
      <div>
        <span>{description}</span>
        <span> - </span>
        <span>£{amount}</span>
      </div>
      <div>
        <button onClick={() => handleEdit(id)}>edit</button>
        <button onClick={() => handleDelete(id)}>clear</button>
      </div>
    </li>
  );
}

export default ExpenseItem;
