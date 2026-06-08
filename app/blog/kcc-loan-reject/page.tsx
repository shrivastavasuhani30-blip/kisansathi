import Link from "next/link";
import Navbar from "../../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KCC Loan Reject क्यों होता है? 5 मुख्य कारण | KisanSathi",
  description: "KCC loan reject होने के 5 मुख्य कारण और उनका समाधान। CIBIL score, documents, outstanding loan — सब Hindi में समझें। MP/UP के किसानों के लिए।",
  keywords: ["KCC loan reject reason", "KCC loan rejection", "kisan credit card reject", "KCC loan kyon reject hua", "KCC loan MP UP"],
};

export default function KCCBlogPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#FBF6EE", fontFamily: "'Hind', 'Noto Sans Devanagari', sans-serif" }}>
      <Navbar rightLink={{ href: "/", label: "← वापस" }} />

      <article style={{ padding: "28px 20px", maxWidth: "680px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ background: "#7A1C1C", color: "white", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px" }}>
              KCC Guide
            </span>
            <span style={{ fontSize: "11px", color: "#888" }}>5 मिनट में पढ़ें</span>
          </div>
          <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#0D1F0D", lineHeight: 1.3, marginBottom: "12px" }}>
            KCC Loan Reject क्यों होता है? — 5 मुख्य कारण और समाधान
          </h1>
          <p style={{ fontSize: "15px", color: "#4A4540", lineHeight: 1.7 }}>
            अगर आपका Kisan Credit Card (KCC) loan reject हुआ है तो आप अकेले नहीं हैं। हर साल लाखों किसानों का KCC reject होता है — लेकिन ज़्यादातर cases में इसे fix किया जा सकता है।
          </p>
        </div>

        {/* Reason 1 */}
        <div style={{ background: "white", borderRadius: "14px", padding: "20px", marginBottom: "16px", borderLeft: "4px solid #C9A84C" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0D1F0D", marginBottom: "10px" }}>
            1. CIBIL Score कम होना
          </h2>
          <p style={{ fontSize: "14px", color: "#4A4540", lineHeight: 1.7, marginBottom: "10px" }}>
            KCC के लिए बैंक आपका CIBIL score देखता है। अगर score 700 से कम है तो loan reject होने की संभावना बढ़ जाती है। पुराना कोई loan miss हुआ हो, या cooperative society का default हो — इससे score गिरता है।
          </p>
          <div style={{ background: "#F0FAF2", borderRadius: "8px", padding: "12px" }}>
            <p style={{ fontSize: "13px", color: "#1A4D2E", fontWeight: 600 }}>✅ समाधान:</p>
            <p style={{ fontSize: "13px", color: "#4A4540", lineHeight: 1.6 }}>
              cibil.com पर जाएं → Free Credit Report निकालें → जो account problem कर रहा है उसे identify करें → dispute file करें अगर galat entry है।
            </p>
          </div>
        </div>

        {/* Reason 2 */}
        <div style={{ background: "white", borderRadius: "14px", padding: "20px", marginBottom: "16px", borderLeft: "4px solid #C9A84C" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0D1F0D", marginBottom: "10px" }}>
            2. Documents अधूरे होना
          </h2>
          <p style={{ fontSize: "14px", color: "#4A4540", lineHeight: 1.7, marginBottom: "10px" }}>
            KCC के लिए ज़मीन के कागज़ (खसरा/खतौनी), Aadhaar, बैंक passbook सब सही होने चाहिए। एक भी document missing या outdated हो तो bank reject कर देता है।
          </p>
          <div style={{ background: "#F0FAF2", borderRadius: "8px", padding: "12px" }}>
            <p style={{ fontSize: "13px", color: "#1A4D2E", fontWeight: 600 }}>✅ समाधान:</p>
            <p style={{ fontSize: "13px", color: "#4A4540", lineHeight: 1.6 }}>
              पटवारी से updated खसरा/खतौनी लें। Aadhaar में नाम और address सही हो। बैंक में जाकर exact document list मांगें।
            </p>
          </div>
        </div>

        {/* Reason 3 */}
        <div style={{ background: "white", borderRadius: "14px", padding: "20px", marginBottom: "16px", borderLeft: "4px solid #C9A84C" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0D1F0D", marginBottom: "10px" }}>
            3. पुराना Loan Outstanding होना
          </h2>
          <p style={{ fontSize: "14px", color: "#4A4540", lineHeight: 1.7, marginBottom: "10px" }}>
            अगर आपका कोई पुराना loan — उसी bank में, दूसरे bank में, या cooperative society में — अभी भी बाकी है तो नया KCC मिलना बहुत मुश्किल है।
          </p>
          <div style={{ background: "#F0FAF2", borderRadius: "8px", padding: "12px" }}>
            <p style={{ fontSize: "13px", color: "#1A4D2E", fontWeight: 600 }}>✅ समाधान:</p>
            <p style={{ fontSize: "13px", color: "#4A4540", lineHeight: 1.6 }}>
              पहले outstanding amount पता करें। Settlement plan बनाएं। NOC letter लें। फिर fresh KCC apply करें।
            </p>
          </div>
        </div>

        {/* Reason 4 */}
        <div style={{ background: "white", borderRadius: "14px", padding: "20px", marginBottom: "16px", borderLeft: "4px solid #C9A84C" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0D1F0D", marginBottom: "10px" }}>
            4. ज़मीन किसान के नाम न होना
          </h2>
          <p style={{ fontSize: "14px", color: "#4A4540", lineHeight: 1.7, marginBottom: "10px" }}>
            KCC के लिए ज़मीन आपके नाम पर होनी चाहिए। अगर ज़मीन पिता या दादा के नाम पर है और mutation नहीं हुआ — बैंक reject कर सकता है।
          </p>
          <div style={{ background: "#F0FAF2", borderRadius: "8px", padding: "12px" }}>
            <p style={{ fontSize: "13px", color: "#1A4D2E", fontWeight: 600 }}>✅ समाधान:</p>
            <p style={{ fontSize: "13px", color: "#4A4540", lineHeight: 1.6 }}>
              तहसील जाएं → mutation (नामांतरण) के लिए apply करें → updated खतौनी निकालें। किरायेदार किसान हैं तो rent agreement के साथ apply करें।
            </p>
          </div>
        </div>

        {/* Reason 5 */}
        <div style={{ background: "white", borderRadius: "14px", padding: "20px", marginBottom: "24px", borderLeft: "4px solid #C9A84C" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0D1F0D", marginBottom: "10px" }}>
            5. Bank ने बिना Reason Reject किया
          </h2>
          <p style={{ fontSize: "14px", color: "#4A4540", lineHeight: 1.7, marginBottom: "10px" }}>
            कई बार bank बिना कोई valid reason दिए loan reject कर देता है। यह RBI guidelines का उल्लंघन है। आपका हक है कि bank आपको लिखित में reason दे।
          </p>
          <div style={{ background: "#FDF3E7", borderRadius: "8px", padding: "12px", border: "1px solid #F5C4B3" }}>
            <p style={{ fontSize: "13px", color: "#7A1C1C", fontWeight: 600 }}>⚖️ आपका अधिकार:</p>
            <p style={{ fontSize: "13px", color: "#4A4540", lineHeight: 1.6 }}>
              RBI के नियम के अनुसार bank को rejection का कारण लिखित में देना अनिवार्य है। नहीं दिया तो Banking Ombudsman में complaint करें।
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "#0D1F0D", borderRadius: "16px", padding: "24px", marginBottom: "20px", textAlign: "center" }}>
          <p style={{ fontSize: "14px", color: "#C9A84C", fontWeight: 700, marginBottom: "8px" }}>
            🌾 अपना KCC rejection reason जानें — 4 सवालों में
          </p>
          <p style={{ fontSize: "13px", color: "#A8D5A2", marginBottom: "16px" }}>
            KisanSathi का free diagnostic tool use करें
          </p>
          <Link href="/diagnostic" style={{
            display: "inline-block", background: "#7A1C1C", color: "white",
            padding: "14px 32px", borderRadius: "12px", textDecoration: "none",
            fontSize: "15px", fontWeight: 700,
          }}>
            अभी Check करें →
          </Link>
        </div>

        {/* WhatsApp */}
        <a href="https://wa.me/916268146820?text=Namaste%2C%20mujhe%20KCC%20loan%20reject%20ke%20baare%20mein%20help%20chahiye"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
            background: "#25D366", color: "white", fontSize: "14px", fontWeight: 600,
            padding: "14px", borderRadius: "12px", textDecoration: "none",
          }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
          WhatsApp पर मदद लो
        </a>

      </article>
    </main>
  );
}