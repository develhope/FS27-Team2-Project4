import DonateWrapper from "./Components/Donate";
import Home from "./Components/Home";
import Adozioni from "./Components/Adozioni";
import { Routes, Route } from "react-router-dom";
import import "./App.css";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<DonateWrapper />} />
          <Route path="/adozioni" element={<Adozioni />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
