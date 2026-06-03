"use client";
import Link from "next/link";
import Navbar from "../../components/Navbar";

const RESULTS: Record<string, {
  title: string; subtitle: string; icon: string;
  color: string; bg: string; border: string;
  steps: { heading: string; body: string }[];
  cta: { label: string; href: string };
}> = {
  r1: {
    title: "CIBIL Score की वजह से reject हुआ",
    subtitle: "यह सबसे common कारण है — और इसे ठीक किया जा सकता है।",
    icon: "📊", color: "#1A3A6B", bg: "#EEF2FF", border: "#B3C3F5",
    steps: [
      { heading: "पहले अपनी CIBIL report लें — free में", body: "CIBIL.com पर जाएं → 'Get Your Score Free' → Aadhaar से verify करें। Report में देखें कि कौन सा account default में है।" },
      { heading: "गलत entry है तो dispute करें", body: "अगर कोई loan आपका नहीं है या पुराना close हो चुका है — CIBIL Dispute Form भरें। 30 दिन में ठीक होना चाहिए।" },
      { heading: "Score सही है तो — bank बदलें", body: "अलग bank या NBFC में apply करें। Regional Rural Banks (RRB) और Cooperative Banks CIBIL को कम weight देते हैं।" },
      { heading: "KCC के लिए — PM Kisan से link करें", body: "PM Kisan में registered हैं तो bank को यह दिखाएं। कई banks इसे security मानते हैं।" },
    ],
    cta: { label: "शिकायत कैसे करें →", href: "/complaint" },
  },
  r2: {
    title: "Loan reject हुआ — कारण अस्पष्ट",
    subtitle: "Bank को लिखित reason देना RBI के rules के तहत ज़रूरी है।",
    icon: "❓", color: "#5D4037", bg: "#FFF8E1", border: "#FFCC80",
    steps: [
      { heading: "Bank से लिखित rejection लें", body: "Branch Manager को application दें: 'मेरा loan [date] को reject हुआ — RBI guidelines के तहत लिखित कारण दें।' यह आपका अधिकार है।" },
      { heading: "30 दिन में जवाब नहीं आया?", body: "RBI Banking Ombudsman में complaint करें — cms.rbi.org.in पर। बिल्कुल free है।" },
      { heading: "दूसरे bank में try करें", body: "एक bank के reject से निराश न हों। Cooperative bank, RRB, या NBFC में भी apply करें।" },
    ],
    cta: { label: "Complaint Guide देखें →", href: "/complaint" },
  },
  r3: {
    title: "पुराना loan बाकी है",
    subtitle: "यह सबसे सुलझाने योग्य कारण है — एक-एक step करें।",
    icon: "🏦", color: "#1A4D2E", bg: "#F0FAF2", border: "#B3DEC1",
    steps: [
      { heading: "पुराने loan का NOC लें", body: "जिस bank में पुराना loan था — वहाँ जाएं और No Objection Certificate (NOC) मांगें। Loan close हो चुका है तो यह free में मिलना चाहिए।" },
      { heading: "CIBIL में update होने दें", body: "NOC मिलने के बाद CIBIL report 30-45 दिन में update होती है। फिर नया loan apply करें।" },
      { heading: "Cooperative society का loan है?", body: "तो ज़िला cooperative bank में जाएं। वे अपने members को priority देते हैं।" },
      { heading: "Partial waiver मांगें", body: "पुराना loan बड़ा है तो bank से one-time settlement (OTS) की बात करें — penalty माफ करवाएं।" },
    ],
    cta: { label: "WhatsApp पर मदद लें →", href: "https://wa.me/917000000000" },
  },
  r4: {
    title: "कागज़ पूरे नहीं थे",
    subtitle: "यह सबसे आसान fix है — सही documents के साथ दोबारा apply करें।",
    icon: "📄", color: "#8B4513", bg: "#FDF3E7", border: "#F5C4B3",
    steps: [
      { heading: "ज़मीन के कागज़ (खसरा/खतौनी)", body: "Tehsil या Patwari से updated copy लें। MP में mpbhulekh.gov.in से online निकाल सकते हैं।" },
      { heading: "Girdawari (फसल प्रमाण)", body: "हर season में Patwari गिरदावरी करता है। उससे certified copy लें — यह KCC के लिए ज़रूरी है।" },
      { heading: "Aadhaar से bank account link करें", body: "अगर Aadhaar और bank account same mobile number से linked नहीं है — branch में जाकर update करें।" },
      { heading: "पूरे documents के साथ दोबारा apply करें", body: "Same bank में जाएं — पहले reject हुए हैं तो यह बताएं और नए documents दिखाएं। Branch Manager से मिलें।" },
    ],
    cta: { label: "KCC Scheme जानें →", href: "/schemes" },
  },
  r5: {
    title: "Bank ने बिना कारण reject किया",
    subtitle: "यह RBI rules का उल्लंघन है — आपका अधिकार है जानने का।",
    icon: "⚖️", color: "#6B1A3A", bg: "#FEF0F5", border: "#F5B3CC",
    steps: [
      { heading: "तुरंत लिखित notice दें", body: "Branch Manager को application दें: 'मेरा loan बिना कारण बताए reject हुआ। RBI circular RBI/2022-23/04 के तहत लिखित reason देना ज़रूरी है।'" },
      { heading: "30 दिन wait करें", body: "Bank को 30 दिन का time दें। अगर satisfactory जवाब नहीं आया — Ombudsman में complaint करें।" },
      { heading: "RBI Banking Ombudsman में complaint करें", body: "cms.rbi.org.in पर जाएं → 'File a Complaint' → Bank का नाम और problem select करें। बिल्कुल free है।" },
      { heading: "State Bank या RRB में try करें", body: "Private bank ने reject किया? State Bank of India या Regional Rural Bank में apply करें — इनकी farmer-friendly policies हैं।" },
    ],
    cta: { label: "Complaint Guide देखें →", href: "/complaint" },
  },
};

export default function ResultPage({ params }: { params: { id: string } }) {
  const result = RESULTS[params.id] || RESULTS.r2;

  return (
    <main style={{ minHeight: "100vh", background: "#FAF7F2", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
      <Navbar rightLink={{ href: "/diagnostic", label: "दोबारा try करें" }} />

      <section style={{ padding: "28px 24px", maxWidth: "480px", margin: "0 auto" }}>

        {/* Result header */}
        <div style={{
          background: result.bg, border: `1.5px solid ${result.border}`,
          borderRadius: "20px", padding: "24px", marginBottom: "24px",
        }}>
          <span style={{ fontSize: "40px", display: "block", marginBottom: "12px" }}>{result.icon}</span>
          <h1 style={{ fontSize: "20px", fontWeight: 700, color: "#1A1714", lineHeight: 1.35, marginBottom: "8px" }}>
            {result.title}
          </h1>
          <p style={{ fontSize: "14px", color: "#4A4540", lineHeight: 1.6 }}>{result.subtitle}</p>
        </div>

        {/* Steps */}
        <p style={{ fontSize: "11px", color: "#5D7A5D", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "14px" }}>
          अब क्या करें — step by step
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
          {result.steps.map((step, i) => (
            <div key={i} style={{
              background: "white", border: "1px solid #E5E0D8",
              borderRadius: "14px", padding: "16px",
              display: "flex", gap: "14px", alignItems: "flex-start",
            }}>
              <div style={{
                width: "28px", height: "28px", borderRadius: "50%",
                background: result.color, color: "white",
                fontSize: "13px", fontWeight: 700, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>{i + 1}</div>
              <div>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#1A1714", marginBottom: "6px" }}>{step.heading}</p>
                <p style={{ fontSize: "13px", color: "#4A4540", lineHeight: 1.65 }}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={result.cta.href}
          target={result.cta.href.startsWith("http") ? "_blank" : "_self"}
          style={{
            display: "block", textAlign: "center",
            background: "#1A4D2E", color: "white",
            fontSize: "15px", fontWeight: 700, padding: "16px",
            borderRadius: "14px", textDecoration: "none",
            boxShadow: "0 4px 0 #0D2F1C", marginBottom: "12px",
          }}
        >
          {result.cta.label}
        </Link>

        <Link href="/diagnostic" style={{
          display: "block", textAlign: "center",
          background: "white", color: "#4A4540",
          fontSize: "14px", padding: "14px", borderRadius: "14px",
          textDecoration: "none", border: "1px solid #E5E0D8",
        }}>
          ← दोबारा diagnostic करें
        </Link>

      </section>
    </main>
  );
}
