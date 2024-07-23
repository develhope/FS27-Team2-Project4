import DonateWrapper from "./Components/Donate";
import Home from "./Components/Home";
import Adozioni from "./Components/Adozioni";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<DonateWrapper />} />
          <Route path="/adozioni" element={<Adozioni />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
