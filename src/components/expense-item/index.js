import React from "react";

function ExpenseItem({ expense }) {
  const { description, amount } = expense;
  return (
    <li>
      <div>
        <span>{description}</span>
        <span> - </span>
        <span>£{amount}</span>
      </div>
      <div>
        <button>edit</button>
        <button>clear</button>
      </div>
    </li>
  );
}

export default ExpenseItem;
