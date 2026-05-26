import Link from "next/link";

export default function ComplaintGuide() {
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
          background: "#FDF3E7", border: "1.5px solid #F5C4B3",
          borderRadius: "16px", padding: "24px", marginBottom: "24px",
        }}>
          <p style={{ fontSize: "11px", color: "#993C1D", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "10px" }}>Tumhara haq hai</p>
          <h1 style={{ fontSize: "24px", fontWeight: 500, color: "#1A1714", lineHeight: 1.3, marginBottom: "10px" }}>
            Complaint kaise karein
          </h1>
          <p style={{ fontSize: "14px", color: "#4A4540", lineHeight: 1.6 }}>
            Bank ne galat kiya? RBI Banking Ombudsman free hai, online hai, aur bank ko jawab dena padta hai.
          </p>
        </div>

        {[
          {
            num: 1,
            title: "Pehle bank ko likhit notice do",
            body: "Ombudsman mein jaane se pehle bank ko mauka do. Branch mein jao aur yeh application do:",
            extra: (
              <div style={{ background: "#FAF7F2", borderRadius: "10px", padding: "14px 16px", fontSize: "13px", color: "#1A1714", lineHeight: 1.7, borderLeft: "3px solid #E8894A" }}>
                <p>Seva mein,</p>
                <p>Branch Manager, [Bank ka naam]</p>
                <br/>
                <p>Mera loan application [date] ko reject hua. RBI guidelines ke anusar mujhe likhit rejection reason dena zaroori hai. Kripya 7 din mein jawab dein.</p>
                <br/>
                <p>Aapka, [Aapka naam, mobile number]</p>
              </div>
            ),
          },
          {
            num: 2,
            title: "30 din wait karo",
            body: "Bank ko 30 din ka time dena zaroori hai. Agar jawab nahi aaya ya satisfactory nahi tha — tab Ombudsman mein jaao.",
          },
        ].map((item) => (
          <div key={item.num} style={{ background: "white", border: "1px solid #E5E0D8", borderRadius: "16px", padding: "20px", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#FDF3E7", color: "#E8894A", fontSize: "14px", fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.num}</div>
              <h2 style={{ fontSize: "16px", fontWeight: 500, color: "#1A1714" }}>{item.title}</h2>
            </div>
            <p style={{ fontSize: "14px", color: "#4A4540", lineHeight: 1.6, marginBottom: item.extra ? "12px" : 0 }}>{item.body}</p>
            {item.extra}
            {item.num === 1 && <p style={{ fontSize: "12px", color: "#4A4540", marginTop: "10px", opacity: 0.7 }}>Apni copy zaroor rakhein — date aur stamp ke saath.</p>}
          </div>
        ))}

        <div style={{ background: "white", border: "1px solid #E5E0D8", borderRadius: "16px", padding: "20px", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#FDF3E7", color: "#E8894A", fontSize: "14px", fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>3</div>
            <h2 style={{ fontSize: "16px", fontWeight: 500, color: "#1A1714" }}>RBI Ombudsman mein complaint karo</h2>
          </div>
          <p style={{ fontSize: "14px", color: "#4A4540", lineHeight: 1.6, marginBottom: "16px" }}>Bilkul free. Koi lawyer nahi chahiye. Online hota hai.</p>
          <div style={{ background: "#F0FAF2", border: "1px solid #C0DD97", borderRadius: "10px", padding: "14px 16px", marginBottom: "16px" }}>
            <p style={{ fontSize: "13px", fontWeight: 500, color: "#27500A", marginBottom: "4px" }}>Website:</p>
            <p style={{ fontSize: "15px", color: "#1A1714", fontWeight: 500 }}>cms.rbi.org.in</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {["cms.rbi.org.in pe jao", "'File a Complaint' click karo", "Bank ka naam, branch, problem select karo", "Apni baat likho — Hinglish mein bhi chalega", "Bank ko diya hua notice attach karo", "Submit — complaint number mil jayega"].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#E8894A", color: "white", fontSize: "11px", fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
                <span style={{ fontSize: "13px", color: "#4A4540", lineHeight: 1.5 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "#1A1714", borderRadius: "16px", padding: "24px", marginBottom: "24px" }}>
          <p style={{ fontSize: "11px", color: "#E8894A", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "12px" }}>Yaad rakho</p>
          {["Complaint free hai — koi fees nahi", "Bank ko 30 din mein jawab dena padta hai", "Agar bank galat nikla — compensation bhi mil sakta hai", "Cooperative bank ke liye bhi yahi process hai"].map((p, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: i < 3 ? "10px" : 0 }}>
              <span style={{ color: "#4BAA6A", flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: "13px", color: "#A8A39D", lineHeight: 1.5 }}>{p}</span>
            </div>
          ))}
        </div>

        <Link href="/diagnostic" style={{ display: "block", textAlign: "center", background: "#E8894A", color: "white", fontSize: "15px", fontWeight: 500, padding: "16px", borderRadius: "14px", textDecoration: "none", boxShadow: "0 4px 0 #c4683a", marginBottom: "12px" }}>
          Pehle diagnostic karo →
        </Link>
        <Link href="/" style={{ display: "block", textAlign: "center", background: "white", color: "#4A4540", fontSize: "14px", padding: "14px", borderRadius: "14px", textDecoration: "none", border: "1px solid #E5E0D8" }}>
          Homepage pe wapas jao
        </Link>

      </section>
    </main>
  );
}