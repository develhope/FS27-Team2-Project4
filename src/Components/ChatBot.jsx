import React, { useState, useRef, useEffect } from "react";
import { FaComments } from "react-icons/fa";

const teamMembers = [
  "Astrid",
  "Manuel",
  "Aurora",
  "Alessandro",
  "Antonio",
  "Francesca",
];

const ChatBot = ({ animals }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { sender: "user", text: input };
      setMessages([...messages, userMessage]);
      setInput("");
      setTimeout(() => generateResponse(userMessage.text), 1000);
    }
  };

  const generateResponse = (question) => {
    let response = "";

    if (question.toLowerCase().includes("adozione")) {
      response = "Tutti i nostri animali sono disponibili per l'adozione. Vuoi informazioni su un animale specifico?";
    } else if (question.toLowerCase().includes("volontariato")) {
      response = "Siamo sempre alla ricerca di volontari! Puoi contattarci per maggiori informazioni.";
    } else if (question.toLowerCase().includes("che animali posso adottare?")) {
      response = "Ti reindirizzo alla pagina delle adozioni...";
      setTimeout(() => {
        window.location.href = "/adozioni";
      }, 2000);
    } else if (question.toLowerCase().includes("faq")) {
      response = "Ti reindirizzo alla pagina delle adozioni...";
      setTimeout(() => {
        window.location.href = "/FAQPage";
      }, 2000);
    } else {
      const animal = animals.find((a) =>
        question.toLowerCase().includes(a.nome?.toLowerCase())
      );

      if (animal) {
        const { nome, famiglia, razza, età, sterilizzato, descrizione } = animal;
        response = `${nome} è un ${famiglia} ${razza}. Ha ${età} anni e ${
          sterilizzato === "Sterilizzato" ? "è sterilizzato" : "non è sterilizzato"
        }. ${descrizione}`;
      } else {
        response = "Grazie per il tuo messaggio! Uno dei nostri operatori ti risponderà a breve.";
      }
    }

    const botMessage = {
      sender: teamMembers[Math.floor(Math.random() * teamMembers.length)],
      text: response,
    };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col">
          <div className="flex justify-between items-center p-4 bg-[#92aa7f] text-white rounded-t-lg">
            <h2 className="text-lg font-semibold">Chat con noi!</h2>
            <button onClick={toggleChat} className="text-2xl">
              ×
            </button>
          </div>
          <div
            className="flex-1 p-4 overflow-y-auto"
            ref={chatRef}
            style={{ scrollBehavior: "smooth" }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-2 p-2 rounded-lg ${
                  msg.sender === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"
                }`}
              >
                <p className="text-sm">
                  {msg.sender !== "user" && <strong>{msg.sender}: </strong>}
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
          <div className="p-2 bg-gray-100 rounded-b-lg flex">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <button
              className="bg-[#92aa7f] text-white py-2 px-4 rounded-md font-bold ml-2"
              onClick={handleSend}
            >
              Invia
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-[#92aa7f] text-white p-2 rounded-full shadow-lg"
          onClick={toggleChat}
        >
          <FaComments />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
