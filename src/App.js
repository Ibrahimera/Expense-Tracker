import React from "react";
import "./App.css";
import Header from "./components/header";
import Balance from "./components/balance";
import IncomeExpense from "./components/Incomeexpense";
import HistoryList from "./components/HistoryList";
import AddToList from "./components/AddToList";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <div className="App">
        <Header />
        <Balance />
        <IncomeExpense />
        <HistoryList />
        <AddToList />
      </div>
    </GlobalState>
  );
}

export default App;
