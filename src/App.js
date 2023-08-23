import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./LoginPage/LoginPage.jsx";
import RegisterPage from "./RegisterPage/RegisterPage.jsx";
import HomePage from "./HomePage/HomePage.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RegisterPage />} />
        <Route exact path="/LoginPage" element={<LoginPage />} />
        <Route exact path="/HomePage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
