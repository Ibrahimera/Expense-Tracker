import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
const AddToList = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);
  const spent = (char) => {
    const finalAmount =
      char != "-" ? parseFloat(amount) : parseFloat(amount) * -1;
    addTransaction({
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: finalAmount,
    });
    setAmount("");
    setText("");
  };

  return (
    <>
      <h5>Add New transaction</h5>
      <div>
        <div>Text</div>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div>Amount</div>
        <input
          type="text"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <div>
          <button className="spent" onClick={() => spent("-")}>
            Spent
          </button>
          <button className="get" onClick={() => spent("+")}>
            Get
          </button>
        </div>
      </div>
    </>
  );
};

export default AddToList;
