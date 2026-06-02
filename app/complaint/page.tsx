import Link from "next/link";
import Navbar from "../components/Navbar";

export default function ComplaintGuide() {
  return (
    <main style={{ minHeight: "100vh", background: "#FAF7F2", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>

      {/* ── NAVBAR with KisanSathi Logo ── */}
      <Navbar rightLink={{ href: "/diagnostic", label: "Loan Diagnostic" }} />

      <section style={{ padding: "32px 24px", maxWidth: "480px", margin: "0 auto" }}>

        <div style={{
          background: "#FDF3E7", border: "1.5px solid #F5C4B3",
          borderRadius: "16px", padding: "24px", marginBottom: "24px",
        }}>
          <p style={{ fontSize: "11px", color: "#993C1D", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "10px", fontWeight: 600 }}>
            तुम्हारा हक़ है
          </p>
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#1A1714", lineHeight: 1.3, marginBottom: "10px" }}>
            शिकायत कैसे करें
          </h1>
          <p style={{ fontSize: "14px", color: "#4A4540", lineHeight: 1.6 }}>
            Bank ने गलत किया? RBI Banking Ombudsman free है, online है, और bank को जवाब देना पड़ता है।
          </p>
        </div>

        {[
          {
            num: 1,
            title: "पहले bank को लिखित notice दो",
            body: "Ombudsman में जाने से पहले bank को मौका दो। Branch में जाओ और यह application दो:",
            extra: (
              <div style={{ background: "#FAF7F2", borderRadius: "10px", padding: "14px 16px", fontSize: "13px", color: "#1A1714", lineHeight: 1.7, borderLeft: "3px solid #1A4D2E" }}>
                <p>सेवा में,</p>
                <p>Branch Manager, [Bank का नाम]</p>
                <br/>
                <p>मेरा loan application [date] को reject हुआ। RBI guidelines के अनुसार मुझे लिखित rejection reason देना ज़रूरी है। कृपया 7 दिन में जवाब दें।</p>
                <br/>
                <p>आपका, [आपका नाम, mobile number]</p>
              </div>
            ),
          },
          {
            num: 2,
            title: "30 दिन wait करो",
            body: "Bank को 30 दिन का time देना ज़रूरी है। अगर जवाब नहीं आया या satisfactory नहीं था — तब Ombudsman में जाओ।",
          },
        ].map((item) => (
          <div key={item.num} style={{ background: "white", border: "1px solid #E5E0D8", borderRadius: "16px", padding: "20px", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#F0FAF2", color: "#1A4D2E", fontSize: "14px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.num}</div>
              <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#1A1714" }}>{item.title}</h2>
            </div>
            <p style={{ fontSize: "14px", color: "#4A4540", lineHeight: 1.6, marginBottom: item.extra ? "12px" : 0 }}>{item.body}</p>
            {item.extra}
            {item.num === 1 && <p style={{ fontSize: "12px", color: "#4A4540", marginTop: "10px", opacity: 0.7 }}>अपनी copy ज़रूर रखें — date और stamp के साथ।</p>}
          </div>
        ))}

        <div style={{ background: "white", border: "1px solid #E5E0D8", borderRadius: "16px", padding: "20px", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#F0FAF2", color: "#1A4D2E", fontSize: "14px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>3</div>
            <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#1A1714" }}>RBI Ombudsman में complaint करो</h2>
          </div>
          <p style={{ fontSize: "14px", color: "#4A4540", lineHeight: 1.6, marginBottom: "16px" }}>बिल्कुल free. कोई lawyer नहीं चाहिए। Online होता है।</p>
          <div style={{ background: "#F0FAF2", border: "1px solid #C0DD97", borderRadius: "10px", padding: "14px 16px", marginBottom: "16px" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "#27500A", marginBottom: "4px" }}>Website:</p>
            <p style={{ fontSize: "15px", color: "#1A1714", fontWeight: 700 }}>cms.rbi.org.in</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {["cms.rbi.org.in पर जाओ", "'File a Complaint' click करो", "Bank का नाम, branch, problem select करो", "अपनी बात लिखो — Hinglish में भी चलेगा", "Bank को दिया हुआ notice attach करो", "Submit — complaint number मिल जाएगा"].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#1A4D2E", color: "white", fontSize: "11px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
                <span style={{ fontSize: "13px", color: "#4A4540", lineHeight: 1.5 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "#0D1F0D", borderRadius: "16px", padding: "24px", marginBottom: "24px" }}>
          <p style={{ fontSize: "11px", color: "#C9A84C", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "12px", fontWeight: 600 }}>याद रखो</p>
          {["Complaint free है — कोई fees नहीं", "Bank को 30 दिन में जवाब देना पड़ता है", "अगर bank गलत निकला — compensation भी मिल सकता है", "Cooperative bank के लिए भी यही process है"].map((p, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: i < 3 ? "10px" : 0 }}>
              <span style={{ color: "#4BAA6A", flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: "13px", color: "#A8D5A2", lineHeight: 1.5 }}>{p}</span>
            </div>
          ))}
        </div>

        <Link href="/diagnostic" style={{ display: "block", textAlign: "center", background: "#1A4D2E", color: "white", fontSize: "15px", fontWeight: 700, padding: "16px", borderRadius: "14px", textDecoration: "none", boxShadow: "0 4px 0 #0D2F1C", marginBottom: "12px" }}>
          पहले diagnostic करो →
        </Link>
        <Link href="/" style={{ display: "block", textAlign: "center", background: "white", color: "#4A4540", fontSize: "14px", padding: "14px", borderRadius: "14px", textDecoration: "none", border: "1px solid #E5E0D8" }}>
          Homepage पर वापस जाओ
        </Link>

      </section>
    </main>
  );
}
