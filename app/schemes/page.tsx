"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

const SCHEMES = [
  {
    id: "pmkisan",
    icon: "🌾",
    name: "PM Kisan Samman Nidhi",
    amount: "₹6,000 / साल",
    desc: "हर किसान को ₹2,000 की 3 किश्तें — सीधे बैंक में",
    eligibility: ["2 हेक्टेयर तक ज़मीन वाले किसान", "ज़मीन किसान के नाम हो", "परिवार में कोई सरकारी नौकरी न हो"],
    documents: ["Aadhaar card", "बैंक passbook", "ज़मीन के कागज़ (खसरा/खतौनी)"],
    link: "https://pmkisan.gov.in",
    linkLabel: "Status Check करें",
    color: "#1A4D2E",
    bg: "#F0FAF2",
    border: "#B3DEC1",
  },
  {
    id: "pmfby",
    icon: "🛡️",
    name: "PM Fasal Bima Yojana",
    amount: "Premium: 1.5% – 5%",
    desc: "प्राकृतिक आपदा में फसल खराब हो तो बीमा claim मिलेगा",
    eligibility: ["सभी किसान eligible हैं", "KCC लोन वाले किसान automatically enrolled"],
    documents: ["Aadhaar", "बैंक खाता", "फसल बुवाई प्रमाण", "भूमि रिकॉर्ड"],
    link: "https://pmfby.gov.in",
    linkLabel: "Claim Status देखें",
    color: "#8B4513",
    bg: "#FDF3E7",
    border: "#F5C4B3",
  },
  {
    id: "kcc",
    icon: "💳",
    name: "Kisan Credit Card (KCC)",
    amount: "₹3 लाख तक — 4% ब्याज",
    desc: "खाद, बीज, कीटनाशक के लिए आसान और सस्ता loan",
    eligibility: ["सभी किसान, मछुआरे, पशुपालक", "ज़मीन का मालिक या किरायेदार किसान"],
    documents: ["Aadhaar / PAN", "ज़मीन के कागज़", "2 passport photos", "बैंक application form"],
    link: "/diagnostic",
    linkLabel: "Loan reject? कारण जानें",
    color: "#1A3A6B",
    bg: "#EEF2FF",
    border: "#B3C3F5",
  },
  {
    id: "mksy",
    icon: "💰",
    name: "Mukhyamantri Kisan Samridhi (MP)",
    amount: "₹4,000 / साल",
    desc: "MP सरकार का अलग अनुदान — PM Kisan के अतिरिक्त",
    eligibility: ["मध्यप्रदेश के किसान", "PM Kisan में registered हों"],
    documents: ["PM Kisan registration number", "Aadhaar", "MP समग्र ID"],
    link: "https://mpfsts.mp.gov.in",
    linkLabel: "MP Portal देखें",
    color: "#6B1A3A",
    bg: "#FEF0F5",
    border: "#F5B3CC",
  },
  {
    id: "soil",
    icon: "🧪",
    name: "Soil Health Card Yojana",
    amount: "बिल्कुल Free",
    desc: "अपनी मिट्टी की जांच कराएं — कौन सी खाद कितनी डालें",
    eligibility: ["सभी किसान"],
    documents: ["Aadhaar", "खेत का विवरण"],
    link: "https://soilhealth.dac.gov.in",
    linkLabel: "Card Download करें",
    color: "#5D4037",
    bg: "#FFF8E1",
    border: "#FFCC80",
  },
];

export default function SchemesPage() {
  const [expanded, setExpanded] = useState<string | null>("pmkisan");

  return (
    <main style={{ minHeight: "100vh", background: "#FAF7F2", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
      <Navbar rightLink={{ href: "/", label: "← वापस" }} />

      <section style={{ padding: "24px 24px", maxWidth: "480px", margin: "0 auto" }}>

        <div style={{ marginBottom: "24px" }}>
          <p style={{ fontSize: "11px", color: "#5D7A5D", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, marginBottom: "4px" }}>
            सरकारी योजनाएं
          </p>
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#1A1714", marginBottom: "4px" }}>
            PM Kisan & Schemes
          </h1>
          <p style={{ fontSize: "13px", color: "#4A4540", opacity: 0.7 }}>
            आपके लिए कौन सी योजना है — पूरी जानकारी
          </p>
        </div>

        {/* Quick PM Kisan status check */}
        <div style={{ background: "#0D1F0D", borderRadius: "16px", padding: "18px", marginBottom: "20px" }}>
          <p style={{ fontSize: "13px", color: "#C9A84C", fontWeight: 700, marginBottom: "6px" }}>⚡ PM Kisan Status जल्दी check करें</p>
          <p style={{ fontSize: "12px", color: "#A8D5A2", marginBottom: "12px" }}>अपना Aadhaar number डालें और किश्त का status देखें</p>
          <a
            href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "block", textAlign: "center",
              background: "#C9A84C", color: "#0D1F0D",
              fontSize: "14px", fontWeight: 700, padding: "12px",
              borderRadius: "10px", textDecoration: "none",
            }}
          >
            pmkisan.gov.in पर जाएं →
          </a>
        </div>

        {/* Schemes list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {SCHEMES.map(scheme => (
            <div key={scheme.id} style={{
              background: "white", border: `1px solid ${expanded === scheme.id ? scheme.border : "#E5E0D8"}`,
              borderRadius: "16px", overflow: "hidden",
              transition: "border-color 0.2s",
            }}>
              {/* Header row */}
              <button
                onClick={() => setExpanded(expanded === scheme.id ? null : scheme.id)}
                style={{
                  width: "100%", background: "none", border: "none",
                  padding: "16px", cursor: "pointer", fontFamily: "inherit",
                  display: "flex", alignItems: "center", gap: "12px", textAlign: "left",
                }}
              >
                <span style={{ fontSize: "28px", flexShrink: 0 }}>{scheme.icon}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "#1A1714", marginBottom: "2px" }}>{scheme.name}</p>
                  <p style={{ fontSize: "13px", color: scheme.color, fontWeight: 600 }}>{scheme.amount}</p>
                </div>
                <span style={{ fontSize: "16px", color: "#4A4540", opacity: 0.5 }}>
                  {expanded === scheme.id ? "▲" : "▼"}
                </span>
              </button>

              {/* Expanded content */}
              {expanded === scheme.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `1px solid ${scheme.border}` }}>
                  <div style={{ background: scheme.bg, borderRadius: "10px", padding: "12px", margin: "12px 0" }}>
                    <p style={{ fontSize: "13px", color: "#1A1714", lineHeight: 1.6 }}>{scheme.desc}</p>
                  </div>

                  <p style={{ fontSize: "11px", color: "#5D7A5D", fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "8px" }}>
                    कौन eligible है
                  </p>
                  {scheme.eligibility.map((e, i) => (
                    <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
                      <span style={{ color: "#27AE60", flexShrink: 0, fontWeight: 700 }}>✓</span>
                      <span style={{ fontSize: "13px", color: "#4A4540" }}>{e}</span>
                    </div>
                  ))}

                  <p style={{ fontSize: "11px", color: "#5D7A5D", fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "8px", marginTop: "14px" }}>
                    ज़रूरी कागज़
                  </p>
                  {scheme.documents.map((d, i) => (
                    <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "5px" }}>
                      <span style={{ color: "#C9A84C", flexShrink: 0 }}>📄</span>
                      <span style={{ fontSize: "13px", color: "#4A4540" }}>{d}</span>
                    </div>
                  ))}

                  <a
                    href={scheme.link}
                    target={scheme.link.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    style={{
                      display: "block", textAlign: "center",
                      background: scheme.color, color: "white",
                      fontSize: "13px", fontWeight: 700, padding: "12px",
                      borderRadius: "10px", textDecoration: "none", marginTop: "14px",
                    }}
                  >
                    {scheme.linkLabel} →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* WhatsApp help */}
        <a
          href="https://wa.me/917000000000?text=Namaste%2C%20mujhe%20sarkari%20yojana%20ke%20baare%20mein%20help%20chahiye"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
            background: "#25D366", color: "white", fontSize: "14px", fontWeight: 600,
            padding: "14px", borderRadius: "14px", textDecoration: "none",
            boxShadow: "0 3px 0 #1aaa4e", marginTop: "20px",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Scheme में मदद चाहिए? WhatsApp करें
        </a>
      </section>
    </main>
  );
}
