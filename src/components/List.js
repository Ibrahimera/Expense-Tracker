import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
const List = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const { clas, amount } =
    transaction.amount < 0
      ? { clas: "list spent", amount: transaction.amount * -1 }
      : { clas: "list income", amount: transaction.amount };
  const remove = () => {};
  return (
    <div className={clas}>
      <div>
        <span
          className="remove"
          onClick={(e) => deleteTransaction(transaction.id)}
        >
          &times;
        </span>
        {transaction.text}
      </div>
      <div>$ {amount}</div>
    </div>
  );
};

export default List;
