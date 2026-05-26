import Link from "next/link";

export default function About() {
  return (
    <main style={{ minHeight: "100vh", background: "#FAF7F2", fontFamily: "'DM Sans', sans-serif" }}>

      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 24px", borderBottom: "1px solid #E5E0D8",
        background: "#FAF7F2", position: "sticky", top: 0, zIndex: 100,
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
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
        </Link>
        <Link href="/diagnostic" style={{
          fontSize: "13px", color: "#4A4540", textDecoration: "none",
          padding: "6px 14px", borderRadius: "20px", border: "1px solid #E5E0D8",
        }}>Diagnostic Tool</Link>
      </nav>

      <section style={{ padding: "32px 24px", maxWidth: "480px", margin: "0 auto" }}>

        {/* FOUNDER NOTE */}
        <div style={{
          background: "#1A1714", borderRadius: "20px",
          padding: "28px 24px", marginBottom: "24px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{
              width: "48px", height: "48px", borderRadius: "50%",
              background: "#E8894A", display: "flex",
              alignItems: "center", justifyContent: "center",
              fontSize: "20px", flexShrink: 0,
            }}>🌱</div>
            <div>
              <p style={{ fontSize: "15px", fontWeight: 500, color: "white" }}>Founder ka note</p>
              <p style={{ fontSize: "12px", color: "#888780" }}>BankSaathi kyun banaya</p>
            </div>
          </div>
          <p style={{ fontSize: "15px", color: "#D4CFC9", lineHeight: 1.8, marginBottom: "16px" }}>
            Rewa-Satna-Sidhi belt mein hazaron farmers hain jinke KCC reject hote hain — aur unhe pata nahi kyun.
          </p>
          <p style={{ fontSize: "15px", color: "#D4CFC9", lineHeight: 1.8, marginBottom: "16px" }}>
            Bank ek line kehta hai — "CIBIL theek nahi" ya "kagaz poore nahi" — aur farmer ghar wapas aa jaata hai. Koi explanation nahi. Koi next step nahi.
          </p>
          <p style={{ fontSize: "15px", color: "#D4CFC9", lineHeight: 1.8, marginBottom: "16px" }}>
            BankSaathi usi gap ke liye hai. 4 sawaal — aur tumhe pata chal jaata hai kya hua, kyun hua, aur abhi kya karna hai.
          </p>
          <p style={{ fontSize: "15px", color: "#A8A39D", lineHeight: 1.8, fontStyle: "italic" }}>
            Koi form nahi. Koi registration nahi. Koi fees nahi. Bas clarity.
          </p>
        </div>

        {/* WHAT WE ARE */}
        <div style={{ background: "white", border: "1px solid #E5E0D8", borderRadius: "16px", padding: "20px", marginBottom: "16px" }}>
          <p style={{ fontSize: "12px", color: "#4A4540", opacity: 0.5, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "14px" }}>
            Hum kya hain
          </p>
          {[
            { icon: "✓", text: "RBI guidelines pe based information tool" },
            { icon: "✓", text: "MP/UP belt ke farmers ke liye — Hinglish mein" },
            { icon: "✓", text: "Free — hamesha free rahega" },
            { icon: "✗", text: "Hum lawyer nahi hain", sub: true },
            { icon: "✗", text: "Hum bank nahi hain", sub: true },
            { icon: "✗", text: "Koi guarantee nahi dete — information dete hain", sub: true },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: "10px",
              marginBottom: i < 5 ? "10px" : 0,
            }}>
              <span style={{
                color: item.icon === "✓" ? "#4BAA6A" : "#E8894A",
                flexShrink: 0, fontWeight: 500,
              }}>{item.icon}</span>
              <span style={{
                fontSize: "14px", lineHeight: 1.5,
                color: item.sub ? "#4A4540" : "#1A1714",
                opacity: item.sub ? 0.7 : 1,
              }}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* TRUST */}
        <div style={{
          background: "#F0FAF2", border: "1px solid #C0DD97",
          borderRadius: "16px", padding: "20px", marginBottom: "24px",
        }}>
          <p style={{ fontSize: "12px", color: "#27500A", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "12px" }}>
            Information ka source
          </p>
          {[
            "RBI Master Circular on Loans and Advances",
            "RBI Banking Ombudsman Scheme 2006",
            "KCC Scheme — NABARD guidelines",
            "MP/UP state agriculture department guidelines",
          ].map((source, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: "10px",
              marginBottom: i < 3 ? "8px" : 0,
            }}>
              <div style={{
                width: "6px", height: "6px", borderRadius: "50%",
                background: "#4BAA6A", marginTop: "6px", flexShrink: 0,
              }}/>
              <span style={{ fontSize: "13px", color: "#1A1714", lineHeight: 1.5 }}>{source}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link href="/diagnostic" style={{
          display: "block", textAlign: "center",
          background: "#E8894A", color: "white",
          fontSize: "15px", fontWeight: 500,
          padding: "16px", borderRadius: "14px",
          textDecoration: "none", boxShadow: "0 4px 0 #c4683a",
          marginBottom: "12px",
        }}>
          Shuru karo — 4 sawaal →
        </Link>
        <Link href="/" style={{
          display: "block", textAlign: "center",
          background: "white", color: "#4A4540",
          fontSize: "14px", padding: "14px", borderRadius: "14px",
          textDecoration: "none", border: "1px solid #E5E0D8",
        }}>
          Homepage pe wapas jao
        </Link>

      </section>
    </main>
  );
}