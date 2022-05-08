/*eslint-disable */
// import React, { useState } from "react";
import { createContext, useReducer } from "react";
export const themeContext = createContext();
const initialState = { darkMode: false };

const themeReducer = (State, action) => {
    switch (action.type) {
        case 'toggle':
            return {darkMode: !State.darkMode };
        default:
            return State;
    }
}
export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, initialState)
    return (
        <themeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </themeContext.Provider>
    )
}