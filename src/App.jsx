import DonateWrapper from "./Components/Donate";
import Home from "./Components/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Profile from "./Components/Profile";
import { Adozioni } from "./Components/Adozioni";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ChatBot from "./Components/ChatBot";
import FAQPage from "./Components/FAQPage";

import Blog from "./Components/Blog/Blog";
import ArticlePage from "./Components/Blog/ArticlePage";
import { useEffect, useState } from "react";
import FAQPage from "./Components/FAQPage";

function App() {
  const [theme, setTheme] = useState({
    bgColor: "bg-light-green",
    textColor: "text-dark-grey",
    elementText: "hover:text-pink",
    elementBg: "bg-pink",
  });

  const [tag, setTag] = useState("");

  useEffect(() => {;
    if (tag === "gatti") {
      setTheme({
        ...theme,
        bgColor: "bg-dark-purple",
        textColor: "text-light-grey",
        elementText: "hover:text-yellow",
        elementBg: "bg-yellow",
      });
    } else if (tag === "cani") {
      setTheme({
        bgColor: "bg-dark-blue",
        textColor: "text-light-grey",
        elementText: "hover:text-yellow",
        elementBg: "bg-yellow",
      });
    } else {
      setTheme({
        bgColor: "bg-light-green",
        textColor: "text-dark-grey",
        elementText: "hover:text-pink",
        elementBg: "bg-pink",
      });
    }
  }, [tag]);

  function handleTheme(string) {
    setTag(string);
  }

  return (
    <div className="cursor">
      <Navbar
        bgColor={theme.bgColor}
        textColor={theme.textColor}
        elementBg={theme.elementBg}
        elementText={theme.elementText}
      />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<DonateWrapper />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/adozioni" element={<Adozioni />} />
          <Route path="/FAQPage" element={<FAQPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/article/:id"
            element={<ArticlePage theme={theme} setTag={handleTheme} />}
          />
        </Routes>
        <ChatBot />
      </div>
      <Footer
        bgColor={theme.bgColor}
        textColor={theme.textColor}
        elementBg={theme.elementBg}
        elementText={theme.elementText}
      />
    </div>
  );
}

export default App;
