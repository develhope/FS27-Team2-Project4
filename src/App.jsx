import DonateWrapper from "./Components/Donate";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Profile from "./Components/Profile";
import { PetArray } from "./Components/PetArray";

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
    </>
  );
}

export default App;
