import { useState, useEffect, useRef } from "react";
import { Send, X } from "lucide-react";
import logoDark from "@assets/Gemini_Generated_Image_3x57v83x57v83x57-removebg-preview_1771651049880.png";

export default function Chatbot() {

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([
    {
      role: "bot",
      text: "Hello 👋 I’m the Social Wrenchers AI assistant. Ask me about services, pricing, websites, apps or how we can build your idea.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  /* Auto Scroll */
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  /* Close when clicking outside */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  /* Send message */
  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: userMessage.text
    })
  });

  if (!res.ok) {
    throw new Error("Server error");
  }

  const data = await res.json();

  setMessages(prev => [
    ...prev,
    {
      role: "bot",
      text: data.reply || "Sorry, I couldn't generate a response."
    }
  ]);

} catch (err) {
  setMessages(prev => [
    ...prev,
    {
      role: "bot",
      text: "Connection problem. Please try again."
    }
  ]);
}

    setLoading(false);
  }

  return (
    <>

      {/* ================= LAUNCHER ================= */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">

        {/* WHITE WELCOME CARD */}
        {!open && (
          <div className="animate-fadeIn bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-200 text-sm text-slate-700">
            <div className="font-semibold text-slate-900">
              Hi 👋 Welcome!
            </div>
            <div className="text-xs">
              Chat with <span className="text-primary font-medium">Social Wrenchers</span>
            </div>
          </div>
        )}

        {/* BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="relative"
        >
          {!open && (
            <span className="absolute inset-0 rounded-full bg-primary/30 blur-2xl animate-breathe"></span>
          )}

          <div className="relative w-14 h-14 rounded-full bg-white border border-slate-200 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110">

            {open
              ? <X className="w-6 h-6 text-slate-700" />
              : <img src={logoDark} className="w-9 h-9 object-contain" />
            }

          </div>
        </button>
      </div>

      {/* ================= CHAT WINDOW ================= */}
      {open && (
        <div
          ref={boxRef}
          className="fixed bottom-24 right-6 w-[360px] h-[520px] rounded-3xl border border-slate-200 bg-white shadow-2xl flex flex-col overflow-hidden z-50 animate-slideUp"
        >

          {/* HEADER */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex items-center gap-3">
            <img src={logoDark} className="w-8 h-8 rounded-full" />
            <div>
              <div className="font-semibold text-sm">
                Social Wrenchers Assistant
              </div>
              <div className="text-xs opacity-90">
                Typically replies instantly
              </div>
            </div>
          </div>

          {/* MESSAGES AREA */}
          <div
            ref={chatRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50"
          >

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "ml-auto bg-gradient-to-r from-primary to-secondary text-white rounded-br-md shadow"
                    : "bg-white border border-slate-200 text-slate-800 rounded-bl-md shadow-sm"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* typing dots */}
            {loading && (
              <div className="flex gap-1 px-4 py-2 bg-white border border-slate-200 rounded-2xl w-fit shadow-sm">
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-300"></span>
              </div>
            )}

          </div>

          {/* INPUT */}
          <div className="p-3 border-t bg-white flex gap-2 items-center">

            <input
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              onKeyDown={(e)=> e.key==="Enter" && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 border border-slate-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />

            <button
              onClick={sendMessage}
              className="bg-gradient-to-r from-primary to-secondary text-white p-2.5 rounded-full hover:scale-105 transition shadow-md"
            >
              <Send size={18}/>
            </button>

          </div>

        </div>
      )}

    </>
  );
}