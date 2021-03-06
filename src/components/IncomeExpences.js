import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const IncomeExpences = () => {
  const { transactions } = useContext(GlobalContext);
  var plusAmount = 0;
  transactions.map(
    (transaction) =>
      (plusAmount =
        transaction.amount > 0
          ? plusAmount + transaction.amount
          : plusAmount + 0)
  );
  var minusAmount = 0;
  transactions.map(
    (transaction) =>
      (minusAmount =
        transaction.amount < 0
          ? minusAmount + transaction.amount
          : minusAmount + 0)
  );
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${plusAmount}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(minusAmount)}</p>
      </div>
    </div>
  );
};
