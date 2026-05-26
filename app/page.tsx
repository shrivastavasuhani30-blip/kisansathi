import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#FAF7F2",
      fontFamily: "'DM Sans', sans-serif",
    }}>

      {/* NAV */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 24px",
        borderBottom: "1px solid #E5E0D8",
        background: "#FAF7F2",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
            <circle cx="22" cy="22" r="22" fill="#FDF3E7"/>
            <path d="M22 34 C22 34 22 20 22 16" stroke="#4BAA6A" strokeWidth="2" strokeLinecap="round"/>
            <path d="M22 22 C22 22 17 19 15 15 C19 14 23 17 22 22Z" fill="#4BAA6A"/>
            <path d="M22 19 C22 19 27 16 29 12 C25 11 21 14 22 19Z" fill="#6DC48A"/>
            <path d="M22 26 C22 26 18 24 16 21 C20 20 23 23 22 26Z" fill="#4BAA6A" opacity="0.7"/>
            <circle cx="22" cy="34" r="2.5" fill="#E8894A"/>
            <path d="M17 33 Q22 30 27 33" stroke="#E8894A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          </svg>
          <span style={{ fontSize: "18px", fontWeight: 500, color: "#1A1714" }}>BankSaathi</span>
        </div>
        <Link href="/complaint" style={{
          fontSize: "13px", color: "#4A4540",
          textDecoration: "none", padding: "6px 14px",
          borderRadius: "20px", border: "1px solid #E5E0D8",
        }}>
          Complaint Guide
        </Link>
      </nav>

      {/* HERO */}
      <section style={{
        padding: "56px 24px 40px",
        display: "flex", flexDirection: "column",
        alignItems: "center", textAlign: "center",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          background: "#F0FAF2", color: "#27500A",
          fontSize: "12px", fontWeight: 500,
          padding: "5px 14px", borderRadius: "20px",
          marginBottom: "28px", border: "1px solid #C0DD97",
        }}>
          <span style={{
            width: "6px", height: "6px", borderRadius: "50%",
            background: "#4BAA6A", display: "inline-block",
          }}/>
          RBI guidelines pe based · Free
        </div>

        <h1 className="hero-headline">
          Loan <span style={{ color: "#E8894A" }}>reject</span> hua?<br />
          4 sawaal mein<br />samjho kyun.
        </h1>

        <p style={{
          fontSize: "15px", color: "#4A4540",
          lineHeight: 1.6, marginBottom: "36px", maxWidth: "300px",
        }}>
          KCC, fasal, tractor — koi bhi loan.<br />
          Bank ne reason nahi diya? Hum denge.
        </p>

        <Link href="/diagnostic" style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          background: "#E8894A", color: "white",
          fontSize: "16px", fontWeight: 500,
          padding: "16px 32px", borderRadius: "14px",
          textDecoration: "none",
          boxShadow: "0 4px 0 #c4683a",
          marginBottom: "12px",
        }}>
          Shuru Karo
          <span style={{
            width: "20px", height: "20px",
            background: "rgba(255,255,255,0.25)",
            borderRadius: "50%", display: "flex",
            alignItems: "center", justifyContent: "center",
            fontSize: "12px",
          }}>→</span>
        </Link>
        <p style={{ fontSize: "12px", color: "#4A4540", opacity: 0.7 }}>
          Typing nahi, sirf tap karo
        </p>
      </section>

      {/* STEPS PREVIEW */}
      <div style={{
        display: "flex", flexDirection: "column", gap: "10px",
        padding: "0 24px", maxWidth: "420px", margin: "0 auto",
      }}>
        {[
          "Loan kis ke liye tha?",
          "Kaun sa loan type?",
          "Bank ne kya reason diya?",
          "Ek aur sawaal — aur result.",
        ].map((text, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: "12px",
            background: "white", border: "1px solid #E5E0D8",
            borderRadius: "12px", padding: "12px 16px",
          }}>
            <div style={{
              width: "28px", height: "28px", borderRadius: "50%",
              background: "#FDF3E7", color: "#E8894A",
              fontSize: "13px", fontWeight: 500,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>{i + 1}</div>
            <span style={{ fontSize: "13px", color: "#4A4540" }}>{text}</span>
            <span style={{
              marginLeft: "auto", opacity: i === 3 ? 1 : 0.4,
              color: i === 3 ? "#4BAA6A" : "#1A1714",
            }}>{i === 3 ? "✓" : "→"}</span>
          </div>
        ))}
      </div>

      {/* TRUST */}
      <div style={{
        margin: "32px 24px 0", background: "white",
        border: "1px solid #E5E0D8", borderRadius: "16px",
        padding: "20px", maxWidth: "420px",
        marginLeft: "auto", marginRight: "auto",
      }}>
        <p style={{
          fontSize: "11px", color: "#4A4540", opacity: 0.6,
          letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "14px",
        }}>Kyun bharosa karein</p>
        {[
          "RBI ke official guidelines pe based — koi andaza nahi",
          "Aapka data kahin nahi jaata — koi form nahi, koi registration nahi",
          "MP/UP belt ke farmers ke liye banaya — Rewa, Satna, Sidhi",
        ].map((text, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "flex-start",
            gap: "10px", marginBottom: i < 2 ? "10px" : 0,
          }}>
            <div style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: "#4BAA6A", marginTop: "5px", flexShrink: 0,
            }}/>
            <span style={{ fontSize: "13px", color: "#4A4540", lineHeight: 1.5 }}>{text}</span>
          </div>
        ))}
      </div>

      {/* STORY */}
      <div style={{
        margin: "24px 24px 0", background: "#FDF3E7",
        border: "1px solid #F5C4B3", borderRadius: "16px",
        padding: "20px", maxWidth: "420px",
        marginLeft: "auto", marginRight: "auto",
      }}>
        <p style={{
          fontSize: "11px", color: "#993C1D", letterSpacing: "0.8px",
          textTransform: "uppercase", marginBottom: "10px", opacity: 0.8,
        }}>Ek asli kahani</p>
        <p style={{
          fontSize: "15px", color: "#712B13", lineHeight: 1.6, fontStyle: "italic",
        }}>
          &ldquo;Mera KCC reject hua, bank ne sirf itna bola — CIBIL theek nahi.
          Aage kya karna hai kuch nahi pata tha. Phir pata chala rights bhi hote hain.&rdquo;
        </p>
        <p style={{ marginTop: "10px", fontSize: "12px", color: "#993C1D", opacity: 0.7 }}>
          — Ramkhelawan, kisan, Satna
        </p>
      </div>

      {/* FOOTER */}
      <footer style={{
        margin: "40px 0 0", padding: "20px 24px",
        borderTop: "1px solid #E5E0D8",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{ fontSize: "11px", color: "#4A4540", opacity: 0.5 }}>© 2025 BankSaathi</span>
        <div style={{ display: "flex", gap: "16px" }}>
          <Link href="/about" style={{ fontSize: "11px", color: "#4A4540", opacity: 0.5, textDecoration: "none" }}>About</Link>
          <Link href="/complaint" style={{ fontSize: "11px", color: "#4A4540", opacity: 0.5, textDecoration: "none" }}>Complaint Guide</Link>
        </div>
      </footer>

    </main>
  );
}