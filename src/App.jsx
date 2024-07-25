import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import { PetArray } from "./Components/PetArray";
import { PetCardFull } from "./Components/PetCardFull";
import DonateWrapper from "./Components/Donate.jsx";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<DonateWrapper />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/adozioni" element={<PetArray />} />
        </Routes>
      </div>
      <PetCardFull animal={PetArray} />
    </>
  );
}

export default App;
