import React, { createContext, useContext, useReducer } from "react";

//prepares the Data Layer
export const StateContext = createContext();

//wrap our app and provide the Data Layer to every component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull information from the Data Layer
export const useStateValue = () => useContext(StateContext);
