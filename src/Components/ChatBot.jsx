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

const animals = [
  {
    nome: "Scout",
    famiglia: "cane",
    razza: "Golden Retriever",
    sesso: "Maschio",

    età: "3",
    problematiche: "Nessuna",
    sterilizzato: "Non sterilizzato",
    descrizione:
      "Scout è un golden retriever di 3 anni, sempre felice e pronto a giocare. È perfetto per le famiglie con bambini.",
  },
  // ... altri animali ...
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { sender: "user", text: input };
      setMessages([...messages, userMessage]);
      setInput("");
      setTimeout(() => {
        generateResponse(userMessage.text);
      }, 1000);
    }
  };

  const teamMemberResponses = {
    Astrid: "Ciao sono Astrid! Sono la manager del rifugio, decido io cosa tu puoi adottare.",
    Manuel: "Ciao sono Manuel: divertiti a pescare tra gli animali che abbiamo, ciò che peschi ti tieni e non hai diritto ad un secondo lancio.",
    Aurora: "Ciao sono Aurora. Mentre scegli, ti indirizzo su quale band K-pop è più adatta al tuo amico a quattro zampe.",
    Alessandro: "Ciao sono Alessandro. Scegli il cane o gatto che ti piace e poi fuggi sciocco",
    Francesca: "Ciao sono Francesca. Nel frattempo che decidi ti parlo di teatro",
    Antonio: "Ciao sono Antonio! Che cane vuoi?",
  };

  const generateResponse = (question) => {
    let response = "";

    // Simulazione risposte generiche del rifugio
    if (question.toLowerCase().includes("adozione")) {
      response =
        "Tutti i nostri animali sono disponibili per l'adozione. Vuoi informazioni su un animale specifico?";
    } else if (question.toLowerCase().includes("volontariato")) {
      response =
        "Siamo sempre alla ricerca di volontari! Puoi contattarci per maggiori informazioni.";
    } else {
      // Verifica se l'utente vuole parlare con un membro specifico
      const matchMember = question.toLowerCase().match("posso parlare con?");
  if (matchMember) {
    requestedMember = matchMember[1].trim(); 
    response = teamMemberResponses[requestedMember] || "Mi dispiace, al momento non sono disponibile. Posso aiutarti io o preferisci che ti metta in contatto con un altro membro del team?"
      } else {
        // Simulazione risposte specifiche per gli animali
        const animal = animals.find((a) =>
          question.toLowerCase().includes(a.nome.toLowerCase())
        );
        if (animal) {
          response = `${animal.nome} è un ${animal.famiglia} ${animal.razza}. Ha ${animal.età} anni e ${
            animal.sterilizzato === "Sterilizzato" ? "è sterilizzato" : "non è sterilizzato"
          }. ${animal.descrizione}`;
        } else {
          response =
            "Grazie per il tuo messaggio! Uno dei nostri operatori ti risponderà a breve.";
        }
      }
    }

    const botMessage = {
      sender: response in teamMemberResponses ? requestedMember : teamMembers[Math.floor(Math.random() * teamMembers.length)],
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
                  msg.sender === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-gray-100 text-left"
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
              placeholder="Scrivi un messaggio..."
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-[#92aa7f] text-white p-2 rounded-lg"
            >
              Invia
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-[#92aa7f] text-white p-4 rounded-full shadow-lg"
        >
          <FaComments className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
