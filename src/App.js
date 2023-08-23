import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RegisterPage />} />
        <Route exact path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
