import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import List from "./List";
const HistoryList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h5>History</h5>
      <div className="list-container">
        {transactions.map((transaction) => (
          <List key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </>
  );
};

export default HistoryList;
