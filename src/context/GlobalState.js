import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//Initial State
const initalState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
    { id: 5, text: "iPhone", amount: -50 },
  ],
};

// Create context
export const GlobalContext = createContext(initalState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  // Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  // Actions
  const addTransation = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
