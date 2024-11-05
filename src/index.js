
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from "./styles/global";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);