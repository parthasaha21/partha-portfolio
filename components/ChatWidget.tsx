import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_PROMPT } from "../constants";

type Role = "user" | "model";

interface ChatMessage {
  role: Role;
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      text: "Hello. I am Partha's digital assistant. Ask me anything about his work.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // 👇 Vite env var (must be set locally + on Netlify)
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    // If API key missing, just show info message
    if (!apiKey) {
      setMessages((prev) => [
        ...prev,
        { role: "user", text: trimmed },
        {
          role: "model",
          text: "AI is not configured yet (missing API key). Please tell Partha to set VITE_GEMINI_API_KEY.",
        },
      ]);
      setInputValue("");
      return;
    }

    const userMessage = trimmed;
    setInputValue("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey }); // using Gemini Dev API :contentReference[oaicite:1]{index=1}

      const history = [
        ...messages,
        { role: "user" as Role, text: userMessage },
      ];

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: history.map((m) => ({
          role: m.role,
          parts: [{ text: m.text }],
        })),
        config: {
          systemInstruction: AI_SYSTEM_PROMPT,
        },
      });

      const aiText =
        (response as any).text || "I’m not able to answer that right now.";

      setMessages((prev) => [...prev, { role: "model", text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "Connection error while talking to AI." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 bg-black text-white px-6 py-4 rounded-full font-bold shadow-2xl items-center gap-2 hover:scale-105 transition-transform ${
          isOpen ? "hidden" : "flex"
        }`}
      >
        <Sparkles size={18} />
        Ask AI
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 right-4 md:right-8 z-50 w-[90vw] md:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-black text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FF3300] rounded-full animate-pulse" />
                <span className="font-bold text-sm tracking-wider">
                  AI ASSISTANT
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-[#FF3300] transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {!apiKey && (
                <div className="mb-2 text-[11px] text-gray-400">
                  Demo note: AI key is not set. Add{" "}
                  <code className="bg-black/5 px-1 rounded">
                    VITE_GEMINI_API_KEY
                  </code>{" "}
                  in your env to enable live answers.
                </div>
              )}

              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? "bg-black text-white rounded-tr-none"
                        : "bg-white border border-gray-200 text-black rounded-tl-none shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 px-4 py-2 rounded-2xl rounded-tl-none text-xs text-gray-400">
                    Thinking...
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-black transition-colors">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && !isLoading && handleSendMessage()
                  }
                  placeholder="Ask about Partha..."
                  className="flex-1 bg-transparent border-none focus:ring-0 text-sm outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading}
                  className="text-black hover:text-[#FF3300] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
