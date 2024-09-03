import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import DonateWrapper from "./Components/Donate";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import { Adozioni } from "./Components/Adozioni/Adozioni";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ChatBot from "./Components/ChatBot";
import FAQPage from "./Components/FAQPage";
import Blog from "./Components/Blog/Blog";
import ArticlePage from "./Components/Blog/ArticlePage";
import DiventaVolontario from "./Components/DiventaVolontario";
import About from "./Components/About";
import { ShopPage } from "./Components/Shop/ShopPage";
import Resi from "./Components/Resi";
import Rimborsi from "./Components/Rimborsi";
import Community from "./Components/Community/community";
import { CartPage } from "./Components/Shop/CartPage";
import { ShoppingApp } from "./Components/Shop/ShoppingApp";
import { CartProvider } from "./CartContext";
import { SubmitOrderPage } from "./Components/Shop/SubmitOrderPage";
import { Thankyoupage } from "./Components/Shop/ThankYouPage";
import { Login } from "./Components/User/Login";
import { Users } from "./Components/User/Users";
import { SignIn } from "./Components/User/SignIn";
import { AdminProfile } from "./Components/User/AdminProfile";

function App() {
  const [theme, setTheme] = useState({
    bgColor: "bg-light-green",
    textColor: "text-dark-grey",
    elementText: "hover:text-pink",
    elementBg: "bg-pink",
  });

  const [tag, setTag] = useState("");

  useEffect(() => {
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
  }, [tag, theme]);

  function handleTheme(string) {
    setTag(string);
  }

  //gestione login e users

  const [users, setUsers] = useState([
    {
      username: "Admin",
      password: "Team3",
      admin: true,
    },
  ]);
  useEffect(() => console.log(users), [users]);

  const [login, setLogin] = useState(null);

  return (
    <CartProvider>
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
            <Route path="/about" element={<About />} />
            <Route path="/adozioni" element={<Adozioni />} />
            <Route path="/FAQPage" element={<FAQPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shoppingapp" element={<ShoppingApp />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/resi" element={<Resi />} />
            <Route path="/rimborsi" element={<Rimborsi />} />
            <Route path="/diventavolontario" element={<DiventaVolontario />} />
            <Route path="/community" element={<Community />} />
            <Route path="/submitOrderPage" element={<SubmitOrderPage />} />
            <Route path="/thankyoupage" element={<Thankyoupage />} />
            <Route path="/loginAdmin"  element={<AdminProfile />} />
            <Route
              path="/article/:id"
              element={<ArticlePage theme={theme} setTag={handleTheme} />}
            />
            <Route path="/diventa-volontario" element={<DiventaVolontario />} />
            <Route
              path="/login"
              element={
                <Login setLogin={setLogin} login={login} users={users} />
              }
            />
            <Route path="/users" element={<Users />} />
            <Route
              path="/signin"
              element={<SignIn setUsers={setUsers} users={users} />}
            />
            <Route path="/users" element={<Users />} />
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
    </CartProvider>
  );
}

export default App;
