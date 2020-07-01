import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpences } from "./components/IncomeExpences";
import { Transactionlist } from "./components/Transactionlist";
import { AddTransaction } from "./components/AddTransaction";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <Transactionlist />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
