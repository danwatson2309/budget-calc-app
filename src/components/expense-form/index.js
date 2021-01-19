import React from "react";
function ExpenseForm({
  description,
  amount,
  handleDescription,
  handleAmount,
  handleSubmit,
  edit,
}) {
  return (
    <div>
      <form className="input-form" onSubmit={handleSubmit}>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleDescription}
          />
          <span> </span>
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={handleAmount}
          />
        </div>
        <div>
          <button type="submit">{edit ? "Edit" : "Submit"}</button>
        </div>
      </form>
    </div>
  );
}
export default ExpenseForm;
