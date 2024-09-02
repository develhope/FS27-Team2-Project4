import React, { useState, useRef, useEffect } from "react";
import { FaComments } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const chatRef = useRef(null);
  const navigate = useNavigate();

  const toggleChat = () => setIsOpen(!isOpen);

  const addMessage = (sender, text) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender, text },
    ]);
  };

  const handleOptionClick = (option) => {
    switch (option) {
      case "adopt":
        addMessage("bot", "Ti reindirizzo alla pagina delle adozioni...");
        setTimeout(() => {
          navigate("/adozioni");
        }, 2000);
        break;
      case "volunteer":
        addMessage("bot", "Siamo sempre alla ricerca di volontari! Puoi contattarci per maggiori informazioni.");
        setTimeout(() => {
          navigate("/diventa-volontario");
        }, 2000);
        break;
      case "faq":
        addMessage("bot", "Ti reindirizzo alla pagina delle FAQ...");
        setTimeout(() => {
          navigate("/FAQPage");
        }, 2000);
        break;
      case "donate":
        addMessage("bot", "Grazie per il tuo interesse nel donare! Ti reindirizzo alla pagina delle donazioni...");
        setTimeout(() => {
          navigate("/donate");
        }, 2000);
        break;
      case "contact":
        addMessage("bot", "Puoi contattarci direttamente attraverso il modulo nella pagina Contatti.");
        setTimeout(() => {
          navigate("/contact");
        }, 2000);
        break;
      default:
        addMessage("bot", "Scelta non valida, riprova.");
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addMessage("bot", "Come posso aiutarti?");
    }
  }, [isOpen]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-96 h-[500px] bg-white shadow-lg rounded-lg flex flex-col">
          <div className="flex justify-between items-center p-3 bg-[#92aa7f] text-white rounded-t-lg">
            <h2 className="text-lg font-semibold">Chat con noi!</h2>
            <button onClick={toggleChat} className="text-2xl focus:outline-none">
              ×
            </button>
          </div>
          <div
            className="flex-1 p-4 overflow-y-auto space-y-2"
            ref={chatRef}
            style={{ scrollBehavior: "smooth" }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-gray-100 text-left"
                }`}
              >
                <p>
                  {msg.sender !== "user" && <strong>{msg.sender}: </strong>}
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
          <div className="p-3 bg-gray-100 rounded-b-lg flex flex-col space-y-2">
            <button
              onClick={() => handleOptionClick("adopt")}
              className="bg-[#6b8f71] hover:bg-[#5e7c61] text-white py-2 px-3 rounded-md font-medium transition-all"
            >
              Adozioni
            </button>
            <button
              onClick={() => handleOptionClick("volunteer")}
              className="bg-[#6b8f71] hover:bg-[#5e7c61] text-white py-2 px-3 rounded-md font-medium transition-all"
            >
              Volontariato
            </button>
            <button
              onClick={() => handleOptionClick("faq")}
              className="bg-[#6b8f71] hover:bg-[#5e7c61] text-white py-2 px-3 rounded-md font-medium transition-all"
            >
              FAQ
            </button>
            <button
              onClick={() => handleOptionClick("donate")}
              className="bg-[#6b8f71] hover:bg-[#5e7c61] text-white py-2 px-3 rounded-md font-medium transition-all"
            >
              Donazioni
            </button>
            <button
              onClick={() => handleOptionClick("contact")}
              className="bg-[#6b8f71] hover:bg-[#5e7c61] text-white py-2 px-3 rounded-md font-medium transition-all"
            >
              Contatti
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-[#92aa7f] text-white p-3 rounded-full shadow-lg focus:outline-none hover:bg-[#7c957a] transition-all"
          onClick={toggleChat}
        >
          <FaComments />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
