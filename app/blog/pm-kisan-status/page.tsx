import Link from "next/link";
import Navbar from "../../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PM Kisan Status Check — किश्त कब आएगी? | KisanSathi",
  description: "PM Kisan Samman Nidhi की किश्त status check करें। Aadhaar से status देखें, किश्त क्यों रुकी — सब Hindi में। MP/UP/Rajasthan के किसानों के लिए।",
  keywords: ["PM Kisan status check", "PM Kisan kisht kab aayegi", "PM Kisan Samman Nidhi status", "PM Kisan list MP", "pradhan mantri kisan yojana status"],
};

export default function PMKisanStatusPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#FBF6EE", fontFamily: "'Hind', 'Noto Sans Devanagari', sans-serif" }}>
      <Navbar rightLink={{ href: "/", label: "← वापस" }} />

      <article style={{ padding: "28px 20px", maxWidth: "680px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ background: "#1A4D2E", color: "white", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px" }}>
              PM Kisan Guide
            </span>
            <span style={{ fontSize: "11px", color: "#888" }}>5 मिनट में पढ़ें</span>
          </div>
          <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#0D1F0D", lineHeight: 1.3, marginBottom: "12px" }}>
            PM Kisan Status Check — किश्त कब आएगी?
          </h1>
          <p style={{ fontSize: "15px", color: "#4A4540", lineHeight: 1.7 }}>
            PM Kisan Samman Nidhi योजना के तहत हर साल ₹6,000 मिलते हैं — 3 किश्तों में। अगर आपकी किश्त नहीं आई तो यहाँ जानें क्यों और कैसे fix करें।
          </p>
        </div>

        {/* Quick status check */}
        <div style={{ background: "#0D1F0D", borderRadius: "16px", padding: "20px", marginBottom: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "13px", color: "#C9A84C", fontWeight: 700, marginBottom: "6px" }}>⚡ अभी Status Check करें</p>
          <p style={{ fontSize: "12px", color: "#A8D5A2", marginBottom: "14px" }}>Aadhaar number से सीधे pmkisan.gov.in पर</p>
          <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block", background: "#C9A84C", color: "#0D1F0D",
            padding: "12px 28px", borderRadius: "10px", textDecoration: "none",
            fontSize: "14px", fontWeight: 700,
          }}>
            pmkisan.gov.in पर जाएं →
          </a>
        </div>

        {/* How to check */}
        <div style={{ background: "white", borderRadius: "14px", padding: "20px", marginBottom: "16px", borderLeft: "4px solid #C9A84C" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0D1F0D", marginBottom: "12px" }}>
            Status Check कैसे करें — Step by Step
          </h2>
          {[
            { step: "1", text: "pmkisan.gov.in खोलें" },
            { step: "2", text: "'Farmers Corner' में जाएं" },
            { step: "3", text: "'Beneficiary Status' पर click करें" },
            { step: "4", text: "Aadhaar number या Mobile number डालें" },
            { step: "5", text: "Get Data पर click करें — आपकी सारी किश्तें दिखेंगी" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: i < 4 ? "12px" : 0 }}>
              <div style={{
                width: "28px", height: "28px", borderRadius: "50%",
                background: "#0D1F0D", color: "#C9A84C",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "12px", fontWeight: 700, flexShrink: 0,
              }}>{item.step}</div>
              <p style={{ fontSize: "14px", color: "#4A4540" }}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Why kisht stopped */}
        <div style={{ background: "white", borderRadius: "14px", padding: "20px", marginBottom: "16px", borderLeft: "4px solid #7A1C1C" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0D1F0D", marginBottom: "12px" }}>
            किश्त क्यों रुकती है? — 5 मुख्य कारण
          </h2>
          {[
            { reason: "Aadhaar बैंक खाते से link नहीं", fix: "Bank जाएं और Aadhaar seeding करवाएं" },
            { reason: "e-KYC नहीं हुआ", fix: "pmkisan.gov.in पर e-KYC करें या CSC center जाएं" },
            { reason: "बैंक खाता बंद हो गया", fix: "नया खाता खुलवाएं और PM Kisan portal पर update करें" },
            { reason: "ज़मीन के कागज़ में गड़बड़ी", fix: "पटवारी से updated खतौनी लें और portal पर update करें" },
            { reason: "परिवार में कोई income tax भरता है", fix: "इस योजना के लिए eligible नहीं हैं" },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: i < 4 ? "14px" : 0, paddingBottom: i < 4 ? "14px" : 0, borderBottom: i < 4 ? "1px solid #E5E0D8" : "none" }}>
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#7A1C1C", marginBottom: "4px" }}>❌ {item.reason}</p>
              <p style={{ fontSize: "13px", color: "#4A4540" }}>✅ {item.fix}</p>
            </div>
          ))}
        </div>

        {/* Installment schedule */}
        <div style={{ background: "white", borderRadius: "14px", padding: "20px", marginBottom: "16px", borderLeft: "4px solid #C9A84C" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0D1F0D", marginBottom: "12px" }}>
            किश्त कब आती है?
          </h2>
          {[
            { period: "पहली किश्त", months: "अप्रैल — जुलाई", amount: "₹2,000" },
            { period: "दूसरी किश्त", months: "अगस्त — नवंबर", amount: "₹2,000" },
            { period: "तीसरी किश्त", months: "दिसंबर — मार्च", amount: "₹2,000" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "10px 0", borderBottom: i < 2 ? "1px solid #E5E0D8" : "none",
            }}>
              <div>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#0D1F0D" }}>{item.period}</p>
                <p style={{ fontSize: "12px", color: "#4A4540" }}>{item.months}</p>
              </div>
              <p style={{ fontSize: "16px", fontWeight: 700, color: "#1A4D2E" }}>{item.amount}</p>
            </div>
          ))}
        </div>

        {/* Schemes CTA */}
        <div style={{ background: "#0D1F0D", borderRadius: "16px", padding: "24px", marginBottom: "20px", textAlign: "center" }}>
          <p style={{ fontSize: "15px", color: "#C9A84C", fontWeight: 700, marginBottom: "8px" }}>
            🌾 सभी सरकारी योजनाएं एक जगह
          </p>
          <p style={{ fontSize: "13px", color: "#A8D5A2", marginBottom: "16px" }}>
            PM Kisan, KCC, PMFBY — सब की जानकारी Hindi में
          </p>
          <Link href="/schemes" style={{
            display: "inline-block", background: "#7A1C1C", color: "white",
            padding: "14px 32px", borderRadius: "12px", textDecoration: "none",
            fontSize: "15px", fontWeight: 700,
          }}>
            योजनाएं देखें →
          </Link>
        </div>

        {/* WhatsApp */}
        <a href="https://wa.me/916268146820?text=Namaste%2C%20mujhe%20PM%20Kisan%20status%20check%20karne%20mein%20madad%20chahiye"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
            background: "#25D366", color: "white", fontSize: "14px", fontWeight: 600,
            padding: "14px", borderRadius: "12px", textDecoration: "none",
          }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
          PM Kisan में मदद चाहिए? WhatsApp करें
        </a>

      </article>
    </main>
  );
}