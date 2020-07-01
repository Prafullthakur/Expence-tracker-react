import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  var netAmount = 0;
  transactions.map(
    (transaction) => (netAmount = netAmount + transaction.amount)
  );
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">${netAmount.toFixed(2)}</h1>
    </div>
  );
};
