import Link from "next/link";

export default function DocumentHelper() {
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

        <div style={{
          background: "#F0FAF2", border: "1.5px solid #C0DD97",
          borderRadius: "16px", padding: "24px", marginBottom: "24px",
        }}>
          <p style={{ fontSize: "11px", color: "#27500A", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "10px" }}>Document Helper</p>
          <h1 style={{ fontSize: "24px", fontWeight: 500, color: "#1A1714", lineHeight: 1.3, marginBottom: "10px" }}>
            Kaun se kagaz chahiye?
          </h1>
          <p style={{ fontSize: "14px", color: "#4A4540", lineHeight: 1.6 }}>
            Loan type ke hisaab se exact list. Screenshot lo ya print karo — bank jaate waqt saath rakhо.
          </p>
        </div>

        {/* KCC */}
        <div style={{ background: "white", border: "1px solid #E5E0D8", borderRadius: "16px", padding: "20px", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ background: "#FDF3E7", borderRadius: "8px", padding: "6px 12px" }}>
              <span style={{ fontSize: "13px", fontWeight: 500, color: "#E8894A" }}>KCC</span>
            </div>
            <h2 style={{ fontSize: "16px", fontWeight: 500, color: "#1A1714" }}>Kisan Credit Card</h2>
          </div>
          {[
            { doc: "Aadhaar Card", note: "Original + photocopy" },
            { doc: "PAN Card", note: "Agar hai toh — zaroori nahi sabke liye" },
            { doc: "Zameen ki Khasra / Khatauni", note: "Tahsildar se milti hai — updated honi chahiye" },
            { doc: "Girdawari", note: "Patwari se — current season ki" },
            { doc: "Bank passbook / account number", note: "Usi bank mein account hona chahiye" },
            { doc: "Passport size photo", note: "2 copies" },
            { doc: "Bijli bill ya koi address proof", note: "Agar Aadhaar pe address purana hai" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: "12px",
              paddingBottom: i < 6 ? "12px" : 0,
              borderBottom: i < 6 ? "1px solid #F5F0E8" : "none",
              marginBottom: i < 6 ? "12px" : 0,
            }}>
              <div style={{ width: "20px", height: "20px", borderRadius: "4px", border: "1.5px solid #E5E0D8", flexShrink: 0, marginTop: "2px" }}/>
              <div>
                <p style={{ fontSize: "14px", color: "#1A1714", fontWeight: 500, marginBottom: "2px" }}>{item.doc}</p>
                <p style={{ fontSize: "12px", color: "#4A4540", opacity: 0.7 }}>{item.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FASAL */}
        <div style={{ background: "white", border: "1px solid #E5E0D8", borderRadius: "16px", padding: "20px", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ background: "#F0FAF2", borderRadius: "8px", padding: "6px 12px" }}>
              <span style={{ fontSize: "13px", fontWeight: 500, color: "#4BAA6A" }}>Fasal</span>
            </div>
            <h2 style={{ fontSize: "16px", fontWeight: 500, color: "#1A1714" }}>Fasal Loan</h2>
          </div>
          {[
            { doc: "Aadhaar Card", note: "Original + photocopy" },
            { doc: "Khasra / Khatauni", note: "Zameen tumhare naam pe honi chahiye" },
            { doc: "Girdawari", note: "Kaunsi fasal boi — woh confirm karta hai" },
            { doc: "Bank account details", note: "Jahan subsidy aayegi" },
            { doc: "Passport size photo", note: "2 copies" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: "12px",
              paddingBottom: i < 4 ? "12px" : 0,
              borderBottom: i < 4 ? "1px solid #F5F0E8" : "none",
              marginBottom: i < 4 ? "12px" : 0,
            }}>
              <div style={{ width: "20px", height: "20px", borderRadius: "4px", border: "1.5px solid #E5E0D8", flexShrink: 0, marginTop: "2px" }}/>
              <div>
                <p style={{ fontSize: "14px", color: "#1A1714", fontWeight: 500, marginBottom: "2px" }}>{item.doc}</p>
                <p style={{ fontSize: "12px", color: "#4A4540", opacity: 0.7 }}>{item.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* TRACTOR */}
        <div style={{ background: "white", border: "1px solid #E5E0D8", borderRadius: "16px", padding: "20px", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ background: "#FEF9EF", borderRadius: "8px", padding: "6px 12px" }}>
              <span style={{ fontSize: "13px", fontWeight: 500, color: "#D97706" }}>Tractor</span>
            </div>
            <h2 style={{ fontSize: "16px", fontWeight: 500, color: "#1A1714" }}>Tractor Loan</h2>
          </div>
          {[
            { doc: "Aadhaar Card + PAN Card", note: "Dono zaroori hain" },
            { doc: "Zameen ke kagaz", note: "Khasra / Khatauni — security ke liye" },
            { doc: "Income proof", note: "Girdawari ya patwari certificate" },
            { doc: "Tractor ka quotation", note: "Dealer se — model aur price ke saath" },
            { doc: "Bank statement", note: "6 mahine ka — agar maange" },
            { doc: "Passport size photo", note: "2 copies" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: "12px",
              paddingBottom: i < 5 ? "12px" : 0,
              borderBottom: i < 5 ? "1px solid #F5F0E8" : "none",
              marginBottom: i < 5 ? "12px" : 0,
            }}>
              <div style={{ width: "20px", height: "20px", borderRadius: "4px", border: "1.5px solid #E5E0D8", flexShrink: 0, marginTop: "2px" }}/>
              <div>
                <p style={{ fontSize: "14px", color: "#1A1714", fontWeight: 500, marginBottom: "2px" }}>{item.doc}</p>
                <p style={{ fontSize: "12px", color: "#4A4540", opacity: 0.7 }}>{item.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* TIP BOX */}
        <div style={{ background: "#1A1714", borderRadius: "16px", padding: "24px", marginBottom: "24px" }}>
          <p style={{ fontSize: "11px", color: "#E8894A", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "12px" }}>Pro tip</p>
          {[
            "Har document ki 2 photocopies rakhо — original mat do",
            "Khatauni hamesha updated lena — 3 mahine se purani nahi chalti",
            "Girdawari current season ki honi chahiye — patwari se fresh lena",
            "Bank mein jate waqt ek folder mein sab rakhо — professional lagta hai",
          ].map((tip, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: i < 3 ? "10px" : 0 }}>
              <span style={{ color: "#F5C842", flexShrink: 0 }}>→</span>
              <span style={{ fontSize: "13px", color: "#A8A39D", lineHeight: 1.5 }}>{tip}</span>
            </div>
          ))}
        </div>

        <Link href="/diagnostic" style={{
          display: "block", textAlign: "center",
          background: "#E8894A", color: "white",
          fontSize: "15px", fontWeight: 500,
          padding: "16px", borderRadius: "14px",
          textDecoration: "none", boxShadow: "0 4px 0 #c4683a",
          marginBottom: "12px",
        }}>
          Diagnostic tool try karo →
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