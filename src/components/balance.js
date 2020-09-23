import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <>
      <div>
        <span>Your balance is:</span>&nbsp;&nbsp; <b>${total}</b>
      </div>
    </>
  );
};

export default Balance;
