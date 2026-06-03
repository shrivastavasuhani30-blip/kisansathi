"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

const questions = [
  {
    id: "q1",
    question: "Loan kis ke liye tha?",
    options: [
      { label: "Apne liye", value: "self" },
      { label: "Kisi aur ke liye", value: "other" },
    ],
  },
  {
    id: "q2",
    question: "Kaun sa loan tha?",
    options: [
      { label: "KCC (Kisan Credit Card)", value: "kcc" },
      { label: "Fasal loan", value: "fasal" },
      { label: "Tractor loan", value: "tractor" },
      { label: "Ghar / zameen", value: "ghar" },
      { label: "Pata nahi", value: "unknown" },
    ],
  },
  {
    id: "q3",
    question: "Bank ne kya reason diya?",
    options: [
      { label: "CIBIL / credit score kharab hai", value: "cibil" },
      { label: "Purana loan baaki hai", value: "outstanding" },
      { label: "Kagaz poore nahi the", value: "documents" },
      { label: "Kuch nahi bola — seedha reject", value: "no_reason" },
    ],
  },
];

const q4Map: Record<string, { question: string; options: { label: string; value: string }[] }> = {
  cibil: {
    question: "CIBIL kharab hone ki wajah kya lagi?",
    options: [
      { label: "Pehle ka loan default tha", value: "default" },
      { label: "Koi loan tha hi nahi — phir bhi reject", value: "no_history" },
      { label: "Pata nahi", value: "unknown" },
    ],
  },
  outstanding: {
    question: "Purana loan kis bank mein tha?",
    options: [
      { label: "Usi bank mein", value: "same_bank" },
      { label: "Doosre bank mein", value: "other_bank" },
      { label: "Cooperative society mein", value: "cooperative" },
    ],
  },
  documents: {
    question: "Kaunsa kagaz maanga tha bank ne?",
    options: [
      { label: "Zameen ke kagaz", value: "land" },
      { label: "Aadhaar / PAN", value: "identity" },
      { label: "Khet ki girdawari", value: "girdawari" },
      { label: "Pata nahi", value: "unknown" },
    ],
  },
  no_reason: {
    question: "Bank ne likhi rejection di?",
    options: [
      { label: "Haan, likhi mili", value: "written" },
      { label: "Nahi, sirf zubani bola", value: "verbal" },
      { label: "Kuch bhi nahi diya", value: "nothing" },
    ],
  },
};

function getResult(answers: Record<string, string>): string {
  const q3 = answers.q3;
  if (q3 === "cibil") return "r1";
  if (q3 === "outstanding") return "r3";
  if (q3 === "documents") return "r4";
  if (q3 === "no_reason") return "r5";
  return "r2";
}

export default function Diagnostic() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentQ = step < 3 ? questions[step] : q4Map[answers.q3];

  function handleAnswer(value: string) {
    const qId = step < 3 ? questions[step].id : "q4";
    const newAnswers = { ...answers, [qId]: value };
    setAnswers(newAnswers);

    if (step < 3) {
      setStep(step + 1);
    } else {
      const result = getResult(newAnswers);
      router.push(`/result/${result}`);
    }
  }

  const progress = ((step) / 4) * 100;

  return (
    <main style={{ minHeight: "100vh", background: "#FAF7F2", fontFamily: "'DM Sans', sans-serif" }}>

      {/* NAV */}
      <Navbar rightLink={{ href: "/", label: "← Home" }} />

      {/* PROGRESS BAR */}
      <div style={{ height: "4px", background: "#E5E0D8" }}>
        <div style={{
          height: "4px", background: "#1A4D2E",
          width: `${progress}%`,
          transition: "width 0.3s ease",
        }}/>
      </div>

      {/* QUESTION */}
      <section style={{ padding: "40px 24px 24px", maxWidth: "480px", margin: "0 auto" }}>
        <p style={{
          fontSize: "11px", color: "#4A4540", opacity: 0.5,
          letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "12px",
        }}>Step {step + 1} of 4</p>

        <h2 style={{
          fontSize: "24px", fontWeight: 500, color: "#1A1714",
          lineHeight: 1.3, marginBottom: "32px",
        }}>
          {currentQ?.question}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {currentQ?.options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleAnswer(opt.value)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "white", border: "1.5px solid #E5E0D8",
                borderRadius: "14px", padding: "16px 20px",
                fontSize: "15px", color: "#1A1714",
                cursor: "pointer", textAlign: "left",
                width: "100%", fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#1A4D2E";
                (e.currentTarget as HTMLButtonElement).style.background = "#F0FAF2";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#E5E0D8";
                (e.currentTarget as HTMLButtonElement).style.background = "white";
              }}
            >
              {opt.label}
              <span style={{ color: "#1A4D2E", fontSize: "18px" }}>→</span>
            </button>
          ))}
        </div>

        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            style={{
              marginTop: "24px", background: "none", border: "none",
              fontSize: "13px", color: "#4A4540", cursor: "pointer",
              opacity: 0.6, fontFamily: "'DM Sans', sans-serif",
            }}
          >
            ← Pichla sawaal
          </button>
        )}
      </section>
    </main>
  );
}
