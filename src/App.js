import React, { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("#f2f3f4");

  const darkMode = () => {
    if (mode === "#f2f3f4") {
      setMode("dark");
      document.body.style.backgroundColor = "#000";
    } else {
      setMode("#f2f3f4");
      document.body.style.backgroundColor = "#f2f3f4";
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar mode={mode} darkMode={darkMode} />} />
        <Route
          path="/Hero"
          element={<Hero mode={mode} darkMode={darkMode} />}
        />
        <Route
          path="/Contact"
          element={<Contact mode={mode} darkMode={darkMode} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
