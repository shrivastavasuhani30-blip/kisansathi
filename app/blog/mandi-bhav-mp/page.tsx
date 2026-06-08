import Link from "next/link";
import Navbar from "../../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "आज का मंडी भाव MP — गेहूं, सोयाबीन, सरसों | KisanSathi",
  description: "मध्यप्रदेश की सभी मंडियों का आज का भाव। इंदौर, भोपाल, उज्जैन, सागर — गेहूं, सोयाबीन, सरसों, चना का live mandi bhav।",
  keywords: ["mandi bhav MP", "आज का मंडी भाव", "madhya pradesh mandi bhav", "gehu ka bhav aaj", "soyabean mandi price MP", "indore mandi bhav"],
};

export default function MandiBhavMPPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#FBF6EE", fontFamily: "'Hind', 'Noto Sans Devanagari', sans-serif" }}>
      <Navbar rightLink={{ href: "/", label: "← वापस" }} />

      <article style={{ padding: "28px 20px", maxWidth: "680px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ background: "#0D1F0D", color: "#C9A84C", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px" }}>
              मंडी भाव Guide
            </span>
            <span style={{ fontSize: "11px", color: "#888" }}>4 मिनट में पढ़ें</span>
          </div>
          <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#0D1F0D", lineHeight: 1.3, marginBottom: "12px" }}>
            आज का मंडी भाव MP — कैसे पता करें सही दाम?
          </h1>
          <p style={{ fontSize: "15px", color: "#4A4540", lineHeight: 1.7 }}>
            मध्यप्रदेश के किसान भाई अक्सर पूछते हैं — "आज गेहूं का भाव क्या है?" या "इंदौर मंडी में सोयाबीन कितने का बिक रहा है?" यहाँ जानें सब कुछ।
          </p>
        </div>

        {/* Live prices CTA */}
        <div style={{ background: "#0D1F0D", borderRadius: "16px", padding: "20px", marginBottom: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "13px", color: "#C9A84C", fontWeight: 700, marginBottom: "6px" }}>📊 आज का Live मंडी भाव देखें</p>
          <p style={{ fontSize: "12px", color: "#A8D5A2", marginBottom: "14px" }}>Agmarknet से real-time data — बिल्कुल free</p>
          <Link href="/mandi" style={{
            display: "inline-block", background: "#C9A84C", color: "#0D1F0D",
            padding: "12px 28px", borderRadius: "10px", textDecoration: "none",
            fontSize: "14px", fontWeight: 700,
          }}>
            अभी देखें — Live भाव →
          </Link>
        </div>

        {/* Section 1 */}
        <div style={{ background: "white", borderRadius: "14px", padding: "20px", marginBottom: "16px", borderLeft: "4px solid #C9A84C" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0D1F0D", marginBottom: "10px" }}>
            MP की प्रमुख मंडियां और फसलें
          </h2>
          <p style={{ fontSize: "14px", color: "#4A4540", lineHeight: 1.7, marginBottom: "12px" }}>
            मध्यप्रदेश में गेहूं, सोयाबीन, सरसों, चना, मक्का — ये 5 फसलें सबसे ज़्यादा बिकती हैं। इंदौर, उज्जैन, भोपाल, सागर, रीवा — ये MP की बड़ी मंडियां हैं।
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            {[
              { mandi: "इंदौर", crop: "सोयाबीन, गेहूं" },
              { mandi: "उज्जैन", crop: "सोयाबीन, लहसुन" },
              { mandi: "भोपाल", crop: "गेहूं, चना" },
              { mandi: "सागर", crop: "गेहूं, सरसों" },
              { mandi: "रीवा", crop: "धान, गेहूं" },
              { mandi: "सतना", crop: "धान, अरहर" },
            ].map((item, i) => (
              <div key={i} style={{ background: "#FBF6EE", borderRadius: "8px", padding: "10px" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#0D1F0D" }}>{item.mandi}</p>
                <p style={{ fontSize: "11px", color: "#4A4540" }}>{item.crop}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 */}
        <div style={{ background: "white", borderRadius: "14px", padding: "20px", marginBottom: "16px", borderLeft: "4px solid #C9A84C" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0D1F0D", marginBottom: "10px" }}>
            MSP और बाज़ार भाव में क्या फर्क है?
          </h2>
          <p style={{ fontSize: "14px", color: "#4A4540", lineHeight: 1.7, marginBottom: "10px" }}>
            MSP (Minimum Support Price) वह न्यूनतम मूल्य है जो सरकार तय करती है। बाज़ार भाव MSP से ऊपर या नीचे हो सकता है — यह demand और supply पर निर्भर करता है।
          </p>
          <div style={{ background: "#F0FAF2", borderRadius: "8px", padding: "12px" }}>
            <p style={{ fontSize: "13px", color: "#1A4D2E", fontWeight: 600, marginBottom: "6px" }}>2024-25 MSP (प्रमुख फसलें):</p>
            {[
              { crop: "गेहूं", msp: "₹2,275/क्विंटल" },
              { crop: "सोयाबीन", msp: "₹4,600/क्विंटल" },
              { crop: "सरसों", msp: "₹5,650/क्विंटल" },
              { crop: "चना", msp: "₹5,440/क्विंटल" },
              { crop: "धान", msp: "₹2,183/क्विंटल" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: i < 4 ? "1px solid #C8E6C9" : "none" }}>
                <span style={{ fontSize: "13px", color: "#0D1F0D" }}>{item.crop}</span>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#1A4D2E" }}>{item.msp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 */}
        <div style={{ background: "white", borderRadius: "14px", padding: "20px", marginBottom: "16px", borderLeft: "4px solid #C9A84C" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0D1F0D", marginBottom: "10px" }}>
            सही भाव पर बेचने के 3 तरीके
          </h2>
          {[
            { title: "1. सुबह जल्दी मंडी जाएं", desc: "सुबह 6-9 बजे मंडी में भाव अच्छे होते हैं। दोपहर में व्यापारी कम कीमत देते हैं।" },
            { title: "2. एक से ज़्यादा व्यापारी से पूछें", desc: "कम से कम 3-4 व्यापारियों से भाव पूछें। सबसे अच्छा offer लें।" },
            { title: "3. Online भाव check करें पहले", desc: "मंडी जाने से पहले KisanSathi पर live भाव देखें — ताकि आप जानें कि आज का सही दाम क्या है।" },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: i < 2 ? "14px" : 0 }}>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "#0D1F0D", marginBottom: "4px" }}>{item.title}</p>
              <p style={{ fontSize: "13px", color: "#4A4540", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "#7A1C1C", borderRadius: "16px", padding: "24px", marginBottom: "20px", textAlign: "center" }}>
          <p style={{ fontSize: "15px", color: "white", fontWeight: 700, marginBottom: "8px" }}>
            🌾 आज का Live मंडी भाव देखें — Free
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", marginBottom: "16px" }}>
            MP, UP, Rajasthan — सभी मंडियों का real-time data
          </p>
          <Link href="/mandi" style={{
            display: "inline-block", background: "white", color: "#7A1C1C",
            padding: "14px 32px", borderRadius: "12px", textDecoration: "none",
            fontSize: "15px", fontWeight: 700,
          }}>
            Live भाव देखें →
          </Link>
        </div>

        {/* WhatsApp */}
        <a href="https://wa.me/916268146820?text=Namaste%2C%20mujhe%20aaj%20ka%20mandi%20bhav%20chahiye"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
            background: "#25D366", color: "white", fontSize: "14px", fontWeight: 600,
            padding: "14px", borderRadius: "12px", textDecoration: "none",
          }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
          WhatsApp पर भाव पूछो
        </a>

      </article>
    </main>
  );
}