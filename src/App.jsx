import DonateWrapper from "./Components/Donate";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Profile from "./Components/Profile";
import { Adozioni } from "./Components/Adozioni";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<DonateWrapper />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/adozioni" element={<Adozioni />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
