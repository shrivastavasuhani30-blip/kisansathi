"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

const results: Record<string, {
  title: string;
  subtitle: string;
  color: string;
  bgColor: string;
  borderColor: string;
  what: string;
  why: string;
  action: { label: string; detail: string };
  rights: string;
}> = {
  r1: {
    title: "CIBIL score ki wajah se reject hua",
    subtitle: "Yeh samajhne wali baat hai — fix ho sakta hai",
    color: "#7C3AED",
    bgColor: "#F5F3FF",
    borderColor: "#DDD6FE",
    what: "Bank ne tumhara loan CIBIL score kam hone ki wajah se reject kiya. CIBIL ek number hota hai jo batata hai ki pehle ka loan repayment kaisa raha.",
    why: "750 se upar score hona chahiye KCC ke liye. Agar koi purana loan miss hua, ya cooperative society ka default tha — woh score giraa deta hai.",
    action: {
      label: "CIBIL report check karo — free mein",
      detail: "www.cibil.com pe jao → 'Get Free Credit Report' → Aadhaar se verify karo. Report mein dekho kaunsa account problem kar raha hai. Galat entry ho toh dispute file kar sakte ho.",
    },
    rights: "RBI guideline ke hisaab se bank ko CIBIL reject ka reason likhit mein dena zaroori hai. Nahi diya toh Banking Ombudsman mein complaint kar sakte ho.",
  },
  r2: {
    title: "Bank ne galat kiya — yeh tumhara haq hai",
    subtitle: "Bina reason reject karna RBI rules ke khilaaf hai",
    color: "#DC2626",
    bgColor: "#FEF2F2",
    borderColor: "#FECACA",
    what: "Bank ne loan reject kiya lekin koi valid reason nahi diya. Ya reason diya jo RBI guidelines ke hisaab se sahi nahi hai.",
    why: "RBI ka circular kehta hai ki har loan rejection ke saath likhit reason dena zaroori hai. Yeh tumhara haq hai — charity nahi.",
    action: {
      label: "Bank manager ko likhit application do",
      detail: "Ek simple application likho — 'Mera loan [date] ko reject hua. RBI guidelines ke hisaab se mujhe likhit reason chahiye.' Bank manager ke haath mein do, acknowledgement lo.",
    },
    rights: "Agar bank 30 din mein jawab nahi deta — RBI Banking Ombudsman mein complaint karo. Complaint Guide mein poori process hai.",
  },
  r3: {
    title: "Purana loan outstanding hai",
    subtitle: "Pehle yeh settle karo — KCC ka raasta khulega",
    color: "#D97706",
    bgColor: "#FFFBEB",
    borderColor: "#FDE68A",
    what: "Tumhara koi purana loan abhi bhi baaki hai — usi bank mein, doosre bank mein, ya cooperative society mein. Jab tak woh clear nahi hota, naya KCC milna mushkil hai.",
    why: "Banks CIBIL aur RBI defaulter list check karte hain. Outstanding loan ka matlab hai high risk — bank dar ta hai ki yeh loan bhi waapas nahi aayega.",
    action: {
      label: "Purane bank se NOC letter lo",
      detail: "Pehle pata karo exact kitna baaki hai. Bank jaao — 'Outstanding amount aur NOC ke liye application' do. Agar cooperative society ka hai — society office jaao. Amount pata chale toh settlement plan banaao.",
    },
    rights: "Agar loan settle ho chuka hai aur bank abhi bhi defaulter dikh raha hai — yeh CIBIL error hai. Dispute file kar sakte ho CIBIL pe bilkul free mein.",
  },
  r4: {
    title: "Kagaz poore nahi the",
    subtitle: "Sabse simple problem — seedha fix hoti hai",
    color: "#059669",
    bgColor: "#F0FAF2",
    borderColor: "#A7F3D0",
    what: "Bank ne kuch documents maange jo ya toh the nahi, ya galat the. Yeh sabse common reason hai KCC rejection ka — aur sabse aasaan fix bhi.",
    why: "KCC ke liye zameen ke kagaz, Aadhaar, girdawari, aur bank account zaroori hote hain. Ek bhi missing ho toh bank rok deta hai.",
    action: {
      label: "Document checklist print karo aur poori karo",
      detail: "Neeche Document Helper mein jao — KCC ke liye exact list milegi. Sab kagaz lekar seedha bank branch jaao aur fresh application daalo. Pehli application ka rejection matter nahi karta.",
    },
    rights: "Bank ko yeh batana zaroori tha ki kaun se documents chahiye — pehle se. Nahi bataya toh yeh bank ki galti hai. Dobara apply karne ka poora haq hai tumhara.",
  },
  r5: {
    title: "Bank ne reason hi nahi diya",
    subtitle: "Yeh RBI rules ka seedha ullaanghan hai",
    color: "#0369A1",
    bgColor: "#F0F9FF",
    borderColor: "#BAE6FD",
    what: "Bank ne loan reject kiya aur koi reason nahi bataya — na likhit, na zubani. Yeh acceptable nahi hai aur RBI ke rules ke khilaaf hai.",
    why: "RBI ka Master Circular on Loans clearly kehta hai — rejection ka reason dena zaroori hai. Yeh niyam hai, bank ki marzi nahi.",
    action: {
      label: "Aaj hi bank manager ko notice do",
      detail: "Branch mein jao. Likhit application do — 'Mera loan [date] ko reject hua. Koi reason nahi diya gaya. RBI circular ke hisaab se 7 din mein likhit reason chahiye.' Apni copy rakhna. Nahi mila toh Ombudsman complaint ready hai.",
    },
    rights: "Agar bank 7 din mein respond nahi karta — Banking Ombudsman mein complaint karo. Yeh free hai, online hai, aur bank ko jawab dena padta hai.",
  },
};

export default function ResultPage() {
  const params = useParams();
  const slug = params.slug as string;
  const result = results[slug];

  if (!result) {
    return (
      <main style={{ minHeight: "100vh", background: "#FAF7F2", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "#4A4540" }}>Result nahi mila. Wapas jao.</p>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "#FAF7F2", fontFamily: "'DM Sans', sans-serif" }}>

      {/* NAV */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 24px", borderBottom: "1px solid #E5E0D8",
        background: "#FAF7F2", position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <svg width="28" height="28" viewBox="0 0 44 44" fill="none">
            <circle cx="22" cy="22" r="22" fill="#FDF3E7"/>
            <path d="M22 34 C22 34 22 20 22 16" stroke="#4BAA6A" strokeWidth="2" strokeLinecap="round"/>
            <path d="M22 22 C22 22 17 19 15 15 C19 14 23 17 22 22Z" fill="#4BAA6A"/>
            <path d="M22 19 C22 19 27 16 29 12 C25 11 21 14 22 19Z" fill="#6DC48A"/>
            <path d="M22 26 C22 26 18 24 16 21 C20 20 23 23 22 26Z" fill="#4BAA6A" opacity="0.7"/>
            <circle cx="22" cy="34" r="2.5" fill="#E8894A"/>
            <path d="M17 33 Q22 30 27 33" stroke="#E8894A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          </svg>
          <span style={{ fontSize: "16px", fontWeight: 500, color: "#1A1714" }}>BankSaathi</span>
        </div>
        <Link href="/diagnostic" style={{
          fontSize: "13px", color: "#4A4540", textDecoration: "none",
          padding: "6px 14px", borderRadius: "20px", border: "1px solid #E5E0D8",
        }}>← Dobara karo</Link>
      </nav>

      <section style={{ padding: "32px 24px", maxWidth: "480px", margin: "0 auto" }}>

        {/* RESULT CARD */}
        <div style={{
          background: result.bgColor, border: `1.5px solid ${result.borderColor}`,
          borderRadius: "16px", padding: "24px", marginBottom: "20px",
        }}>
          <p style={{
            fontSize: "11px", fontWeight: 500, color: result.color,
            letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "10px",
          }}>Tumhara result</p>
          <h1 style={{ fontSize: "22px", fontWeight: 500, color: "#1A1714", lineHeight: 1.3, marginBottom: "8px" }}>
            {result.title}
          </h1>
          <p style={{ fontSize: "14px", color: "#4A4540", lineHeight: 1.5 }}>{result.subtitle}</p>
        </div>

        {/* WHAT HAPPENED */}
        <div style={{
          background: "white", border: "1px solid #E5E0D8",
          borderRadius: "16px", padding: "20px", marginBottom: "16px",
        }}>
          <p style={{ fontSize: "12px", color: "#4A4540", opacity: 0.5, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "10px" }}>
            Kya hua
          </p>
          <p style={{ fontSize: "14px", color: "#1A1714", lineHeight: 1.6 }}>{result.what}</p>
        </div>

        {/* WHY */}
        <div style={{
          background: "white", border: "1px solid #E5E0D8",
          borderRadius: "16px", padding: "20px", marginBottom: "16px",
        }}>
          <p style={{ fontSize: "12px", color: "#4A4540", opacity: 0.5, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "10px" }}>
            Kyun hua
          </p>
          <p style={{ fontSize: "14px", color: "#1A1714", lineHeight: 1.6 }}>{result.why}</p>
        </div>

        {/* ACTION — THE ONE THING */}
        <div style={{
          background: "#1A1714", borderRadius: "16px",
          padding: "24px", marginBottom: "16px",
        }}>
          <p style={{ fontSize: "11px", color: "#E8894A", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "12px" }}>
            Abhi yeh karo — sirf yeh ek kaam
          </p>
          <p style={{ fontSize: "16px", fontWeight: 500, color: "white", marginBottom: "12px", lineHeight: 1.3 }}>
            {result.action.label}
          </p>
          <p style={{ fontSize: "13px", color: "#A8A39D", lineHeight: 1.6 }}>
            {result.action.detail}
          </p>
        </div>

        {/* RIGHTS */}
        <div style={{
          background: "#F0FAF2", border: "1px solid #C0DD97",
          borderRadius: "16px", padding: "20px", marginBottom: "32px",
        }}>
          <p style={{ fontSize: "12px", color: "#27500A", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "10px" }}>
            Tumhara haq
          </p>
          <p style={{ fontSize: "14px", color: "#1A1714", lineHeight: 1.6 }}>{result.rights}</p>
        </div>

        {/* BOTTOM ACTIONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Link href="/complaint" style={{
            display: "block", textAlign: "center",
            background: "#E8894A", color: "white",
            fontSize: "15px", fontWeight: 500,
            padding: "16px", borderRadius: "14px",
            textDecoration: "none", boxShadow: "0 4px 0 #c4683a",
          }}>
            Complaint Guide dekho →
          </Link>
          <Link href="/" style={{
            display: "block", textAlign: "center",
            background: "white", color: "#4A4540",
            fontSize: "14px", padding: "14px", borderRadius: "14px",
            textDecoration: "none", border: "1px solid #E5E0D8",
          }}>
            Homepage pe wapas jao
          </Link>
        </div>
      </section>
    </main>
  );
}
