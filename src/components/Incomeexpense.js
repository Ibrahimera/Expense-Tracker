import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0);

  const spent = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, item) => (acc += item), 0);

  console.log(income);
  return (
    <div className="income-expense">
      <div className="income">
        <b>INCOME</b>
        <div>${income}</div>
      </div>
      <div className="expense">
        <b>EXPENSE</b>
        <div>${spent * -1}</div>
      </div>
    </div>
  );
};

export default IncomeExpense;
