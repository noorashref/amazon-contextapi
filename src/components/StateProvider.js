import React, { createContext, useContext, useReducer } from "react";

//This is the data layer
export const StateContext = createContext();

//Build the provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//is used to use inside the componenet
export const useStateValue = () => useContext(StateContext);
