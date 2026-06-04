"use client";

import { useState, useRef, useEffect } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type Role = "user" | "assistant";

interface Message {
  id: string;
  role: Role;
  text: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface QuickPrompt {
  label: string;
  icon: string;
  text: string;
}

// ─── Quick Prompt Suggestions ────────────────────────────────────────────────

const QUICK_PROMPTS: QuickPrompt[] = [
  { icon: "🌾", label: "मंडी भाव", text: "आज गेहूं का मंडी भाव क्या है?" },
  { icon: "🌧️", label: "मौसम", text: "अगले 7 दिन का मौसम बताओ" },
  { icon: "🐛", label: "फसल रोग", text: "मेरी फसल की पत्तियाँ पीली हो रही हैं" },
  { icon: "📋", label: "सरकारी योजना", text: "किसानों के लिए कौन सी सरकारी योजनाएं हैं?" },
];

// ─── Utility ─────────────────────────────────────────────────────────────────

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function formatTime(d: Date) {
  return d.toLocaleTimeString("hi-IN", { hour: "2-digit", minute: "2-digit" });
}

// ─── Typing Bubble ───────────────────────────────────────────────────────────

function TypingBubble() {
  return (
    <div className="ks-bubble ks-bubble--bot ks-bubble--typing">
      <span className="ks-dot" style={{ animationDelay: "0ms" }} />
      <span className="ks-dot" style={{ animationDelay: "150ms" }} />
      <span className="ks-dot" style={{ animationDelay: "300ms" }} />
    </div>
  );
}

// ─── Message Row ─────────────────────────────────────────────────────────────

function MessageRow({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";
  return (
    <div className={`ks-row ${isUser ? "ks-row--user" : "ks-row--bot"}`}>
      {!isUser && (
        <div className="ks-avatar">
          <span>🌱</span>
        </div>
      )}
      <div className="ks-row__body">
        {msg.isTyping ? (
          <TypingBubble />
        ) : (
          <div className={`ks-bubble ${isUser ? "ks-bubble--user" : "ks-bubble--bot"}`}>
            <p className="ks-bubble__text">{msg.text}</p>
          </div>
        )}
        {!msg.isTyping && (
          <span className="ks-time">{formatTime(msg.timestamp)}</span>
        )}
      </div>
      {isUser && (
        <div className="ks-avatar ks-avatar--user">
          <span>👨‍🌾</span>
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function KisanChatbox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uid(),
      role: "assistant",
      text: "नमस्ते किसान भाई! 🙏 मैं KisanSathi हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ? मंडी भाव, मौसम, फसल रोग, या सरकारी योजनाओं के बारे में पूछें।",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPrompts, setShowPrompts] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 120) + "px";
  }, [input]);

  async function sendMessage(text: string) {
    if (!text.trim() || isLoading) return;
    setShowPrompts(false);

    const userMsg: Message = {
      id: uid(),
      role: "user",
      text: text.trim(),
      timestamp: new Date(),
    };
    const typingMsg: Message = {
      id: uid(),
      role: "assistant",
      text: "",
      timestamp: new Date(),
      isTyping: true,
    };

    setMessages((prev) => [...prev, userMsg, typingMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `You are KisanSathi, a helpful agricultural assistant for Indian farmers. 
You help with: mandi prices, weather advice, crop disease diagnosis, government schemes (especially for Chhattisgarh), and general farming tips.
Always respond in simple Hindi (Devanagari script). Keep answers concise and practical.
Use emojis sparingly to make responses friendly. Address the farmer as "किसान भाई" or "भाई".
If asked about crop diseases, ask clarifying questions about symptoms.`,
          messages: [{ role: "user", content: text.trim() }],
        }),
      });

      const data = await response.json();
      const replyText =
        data?.content?.[0]?.text || "माफ़ करें, कुछ गड़बड़ हो गई। फिर से कोशिश करें।";

      setMessages((prev) => [
        ...prev.filter((m) => !m.isTyping),
        {
          id: uid(),
          role: "assistant",
          text: replyText,
          timestamp: new Date(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev.filter((m) => !m.isTyping),
        {
          id: uid(),
          role: "assistant",
          text: "इंटरनेट से जुड़ने में समस्या है। कृपया दोबारा कोशिश करें।",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <>
      {/* ── Scoped styles ── */}
      <style>{`
        /* ── Layout ── */
        .ks-chat {
          display: flex;
          flex-direction: column;
          height: 100%;
          min-height: 480px;
          max-height: 700px;
          background: #f7faf3;
          border-radius: 20px;
          overflow: hidden;
          font-family: 'Noto Sans Devanagari', 'Hind', sans-serif;
          box-shadow: 0 8px 40px rgba(34,85,34,0.12);
        }

        /* ── Header ── */
        .ks-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          background: linear-gradient(135deg, #2d6a4f 0%, #40916c 100%);
          color: #fff;
        }
        .ks-header__logo {
          width: 38px;
          height: 38px;
          background: rgba(255,255,255,0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }
        .ks-header__title {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.2px;
        }
        .ks-header__subtitle {
          font-size: 11px;
          opacity: 0.75;
          margin-top: 1px;
        }
        .ks-header__status {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          opacity: 0.85;
        }
        .ks-header__dot {
          width: 7px;
          height: 7px;
          background: #95d5b2;
          border-radius: 50%;
          animation: ks-pulse 2s infinite;
        }
        @keyframes ks-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        /* ── Messages area ── */
        .ks-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          scroll-behavior: smooth;
        }
        .ks-messages::-webkit-scrollbar { width: 4px; }
        .ks-messages::-webkit-scrollbar-thumb { background: #b7d9c8; border-radius: 4px; }

        /* ── Quick prompts ── */
        .ks-prompts {
          padding: 0 14px 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          animation: ks-fade-in 0.3s ease;
        }
        .ks-prompts__label {
          width: 100%;
          font-size: 11px;
          color: #6c8f78;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }
        .ks-prompt-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 12px;
          background: #fff;
          border: 1.5px solid #d4edda;
          border-radius: 20px;
          font-size: 12.5px;
          color: #2d6a4f;
          cursor: pointer;
          transition: all 0.15s;
          font-family: inherit;
        }
        .ks-prompt-btn:hover {
          background: #e8f5e9;
          border-color: #40916c;
          transform: translateY(-1px);
          box-shadow: 0 3px 10px rgba(64,145,108,0.15);
        }

        /* ── Message rows ── */
        .ks-row {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          animation: ks-fade-in 0.25s ease;
        }
        .ks-row--user { flex-direction: row-reverse; }
        .ks-row__body {
          display: flex;
          flex-direction: column;
          max-width: 75%;
        }
        .ks-row--user .ks-row__body { align-items: flex-end; }
        .ks-row--bot .ks-row__body { align-items: flex-start; }

        /* ── Avatar ── */
        .ks-avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #d8f3dc;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          flex-shrink: 0;
          border: 2px solid #b7e4c7;
        }
        .ks-avatar--user { background: #fff3cd; border-color: #ffd166; }

        /* ── Bubbles ── */
        .ks-bubble {
          padding: 10px 14px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.55;
          word-break: break-word;
        }
        .ks-bubble--user {
          background: linear-gradient(135deg, #40916c, #2d6a4f);
          color: #fff;
          border-bottom-right-radius: 4px;
        }
        .ks-bubble--bot {
          background: #fff;
          color: #1a3326;
          border-bottom-left-radius: 4px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
        }
        .ks-bubble__text { margin: 0; }

        /* ── Typing indicator ── */
        .ks-bubble--typing {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 12px 16px;
          min-width: 52px;
        }
        .ks-dot {
          width: 7px;
          height: 7px;
          background: #95d5b2;
          border-radius: 50%;
          animation: ks-bounce 1.2s infinite ease-in-out;
        }
        @keyframes ks-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.6; }
          40% { transform: translateY(-6px); opacity: 1; }
        }

        /* ── Timestamp ── */
        .ks-time {
          font-size: 10px;
          color: #9ab;
          margin-top: 3px;
          padding: 0 4px;
        }

        /* ── Input area ── */
        .ks-input-area {
          padding: 10px 14px 14px;
          background: #fff;
          border-top: 1px solid #e8f5ee;
        }
        .ks-input-row {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          background: #f4faf6;
          border: 1.5px solid #c8e6c9;
          border-radius: 16px;
          padding: 8px 8px 8px 14px;
          transition: border-color 0.2s;
        }
        .ks-input-row:focus-within {
          border-color: #40916c;
          box-shadow: 0 0 0 3px rgba(64,145,108,0.1);
        }
        .ks-textarea {
          flex: 1;
          border: none;
          background: transparent;
          resize: none;
          outline: none;
          font-size: 14px;
          font-family: inherit;
          color: #1a3326;
          line-height: 1.5;
          min-height: 24px;
          max-height: 120px;
        }
        .ks-textarea::placeholder { color: #9ab3a0; }
        .ks-send-btn {
          width: 36px;
          height: 36px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #40916c, #2d6a4f);
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .ks-send-btn:hover:not(:disabled) {
          transform: scale(1.08);
          box-shadow: 0 4px 12px rgba(45,106,79,0.4);
        }
        .ks-send-btn:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }
        .ks-input-hint {
          font-size: 10.5px;
          color: #9ab3a0;
          margin-top: 5px;
          text-align: center;
        }

        /* ── Animation ── */
        @keyframes ks-fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="ks-chat">
        {/* Header */}
        <div className="ks-header">
          <div className="ks-header__logo">🌱</div>
          <div>
            <div className="ks-header__title">KisanSathi</div>
            <div className="ks-header__subtitle">आपका खेती सहायक</div>
          </div>
          <div className="ks-header__status">
            <span className="ks-header__dot" />
            ऑनलाइन
          </div>
        </div>

        {/* Messages */}
        <div className="ks-messages">
          {messages.map((msg) => (
            <MessageRow key={msg.id} msg={msg} />
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick Prompts */}
        {showPrompts && (
          <div className="ks-prompts">
            <span className="ks-prompts__label">जल्दी पूछें</span>
            {QUICK_PROMPTS.map((p) => (
              <button
                key={p.label}
                className="ks-prompt-btn"
                onClick={() => sendMessage(p.text)}
              >
                <span>{p.icon}</span>
                {p.label}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="ks-input-area">
          <div className="ks-input-row">
            <textarea
              ref={textareaRef}
              className="ks-textarea"
              rows={1}
              placeholder="यहाँ अपना सवाल लिखें…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <button
              className="ks-send-btn"
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || isLoading}
              aria-label="भेजें"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <p className="ks-input-hint">Enter दबाएं या बटन क्लिक करें • Shift+Enter नई लाइन</p>
        </div>
      </div>
    </>
  );
}