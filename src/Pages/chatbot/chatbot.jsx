import { useState } from "react";
import './chatbot.css'
import ActiveTopPage from "../../components/activeTopPage";

const BASE_URL = "https://estrada-search-ai-backend-production.up.railway.app";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
  if (!input.trim()) return;

  const res = await fetch("https://estrada-search-ai-backend-production.up.railway.app/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: input })
  });
  const data = await res.json();

  setMessages(prev => [
    ...prev,
    { from: "user", text: input },
    { from: "bot", text: data.answer }
  ]);
  setInput("");
};


  return (
    <>
        <ActiveTopPage pageTitle={"Chatbot"} />
       <div className="chat">
            <div className="messages">
                {messages.map((m, i) => (
                    <p key={i} className={m.from}>
                    {m.text}
                    </p>
                ))}
            </div>

            <div className="chatbot-input">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Savolingizni yozing..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Yuborish</button>
            </div>
       </div>

    </>
  );
}

export default Chatbot;
