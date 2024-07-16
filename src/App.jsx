import React from "react";
import DonateWrapper from "./pages/Donate";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<DonateWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
