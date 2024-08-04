import DonateWrapper from "./Components/Donate";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Profile from "./Components/Profile";
import { Adozioni } from "./Components/Adozioni";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ChatBot from "./Components/ChatBot";
import FAQPage from "./Components/FAQPage";


function App() {
  return (
    <div className="cursor">
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<DonateWrapper />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/adozioni" element={<Adozioni />} />
          <Route path="/FAQPage" element={<FAQPage />} />
        </Routes>
        <ChatBot />
      </div>
      <Footer />
    </div>
  );
}

export default App;
