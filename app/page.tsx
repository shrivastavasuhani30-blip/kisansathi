import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import KisanChatbox from "./components/kisansathi";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#FBF6EE" }}>

      {/* ── NAVBAR ── */}
      <Navbar rightLink={{ href: "/complaint", label: "शिकायत गाइड" }} />


      {/* ── HERO ── */}
      <section style={{
        padding: "32px 20px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        background: "#FBF6EE",
      }}>

        {/* Live badge */}
        <div className="trust-badge fade-in-2">
          <span className="trust-dot" />
       अभी Launch हुआ · बिल्कुल Free
        </div>

        {/* Headline */}
        <h1 className="hero-headline fade-in-3">
          भारत का डिजिटल<br />
          <span style={{ color: "#7A1C1C" }}>किसान साथी</span>
        </h1>

        {/* Sub-headline */}
        <p className="fade-in-4" style={{
          fontSize: "13px",
          color: "#4A4540",
          lineHeight: 1.65,
          marginBottom: "16px",
          maxWidth: "320px",
        }}>
          Live मंडी भाव · Loan guide · सरकारी योजनाएं · फसल सलाह —
          सब एक जगह, Hindi में, बिना registration के।
        </p>

        {/* Feature chips */}
        <div className="fade-in-4" style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          justifyContent: "center",
          marginBottom: "22px",
          maxWidth: "340px",
        }}>
          {[
            "✅ Live मंडी भाव",
            "✅ Loan rejection reason",
            "✅ PM Kisan status",
            "✅ मौसम जानकारी",
            "✅ फसल रोग पहचान",
          ].map((f) => (
            <span key={f} style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "#0D1F0D",
              background: "#fff",
              border: "1px solid #C9A84C",
              padding: "5px 12px",
              borderRadius: "20px",
            }}>{f}</span>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="fade-in-5" style={{ width: "100%", maxWidth: "340px", marginBottom: "10px" }}>
          <Link href="/diagnostic" className="cta-primary">
            Loan समझो — 4 सवालों में →
          </Link>
        </div>

        {/* Secondary CTA */}
        <div className="fade-in-5" style={{ width: "100%", maxWidth: "340px" }}>
          <Link href="#chat" className="cta-secondary">
            सीधे Chat करो 💬
          </Link>
        </div>

        <p style={{ fontSize: "11px", color: "#4A4540", opacity: 0.55, marginTop: "10px" }}>
          Typing नहीं, सिर्फ tap करो · कोई data save नहीं होता
        </p>
      </section>

      {/* ── STATS STRIP ── */}
<div style={{ padding: "0 20px", maxWidth: "420px", margin: "0 auto 28px" }}>
  <div className="stats-strip" style={{ borderRadius: "14px" }}>
    <div className="stat-item">
      <div className="stat-number">5</div>
      <div className="stat-label">सरकारी योजनाएं</div>
    </div>
    <div className="stat-divider" />
    <div className="stat-item">
      <div className="stat-number">3</div>
      <div className="stat-label">राज्य — MP, UP, RJ</div>
    </div>
    <div className="stat-divider" />
    <div className="stat-item">
      <div className="stat-number">100%</div>
      <div className="stat-label">Free · RBI-based</div>
    </div>
  </div>
</div>

      {/* ── FEATURES ── */}
      <div style={{ padding: "24px 20px 0", maxWidth: "420px", margin: "0 auto" }}>
        <p className="section-label">क्या मिलेगा KisanSathi पर</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
          {[
            { icon: "📊", title: "Live मंडी भाव", desc: "MP, UP, Rajasthan — आज का सही दाम", href: "/mandi", live: true },
            { icon: "🏦", title: "Loan Rejection समझो", desc: "KCC, fasal, tractor — bank ने क्यों reject किया?", href: "/diagnostic", live: false },
            { icon: "🌾", title: "PM Kisan & Schemes", desc: "सरकारी योजनाओं की जानकारी और status check", href: "/schemes", live: false },
            { icon: "🌤️", title: "मौसम और फसल सलाह", desc: "अपने जिले का weather और कब क्या बोएं", href: "/weather", live: true },
            { icon: "🔬", title: "फसल रोग पहचान", desc: "Photo upload करो, solution पाओ", href: "#", live: false },
          ].map((f) => (
            <Link key={f.title} href={f.href} style={{ textDecoration: "none" }}>
              <div className="feature-card">
                <div style={{
                  fontSize: "22px",
                  width: "40px",
                  height: "40px",
                  background: "#FBF6EE",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>{f.icon}</div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#0D1F0D", marginBottom: "3px" }}>
                    {f.title}
                    {f.live && <span className="live-pill">LIVE</span>}
                  </div>
                  <div style={{ fontSize: "12px", color: "#4A4540", lineHeight: 1.4 }}>
                    {f.desc}
                  </div>
                </div>
                <div style={{ marginLeft: "auto", color: "#C9A84C", fontSize: "20px" }}>›</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── CHATBOX ── */}
      <div id="chat" style={{ padding: "0 20px", maxWidth: "420px", margin: "0 auto 28px" }}>
        <p className="section-label">KisanSathi से पूछो</p>
        <KisanChatbox />
      </div>

      {/* ── TESTIMONIAL ── */}
      <div style={{
        margin: "0 20px 24px",
        maxWidth: "420px",
        marginLeft: "auto",
        marginRight: "auto",
        background: "#fff",
        borderRadius: "14px",
        padding: "16px 18px",
        borderLeft: "4px solid #7A1C1C",
      }}>
        <p className="section-label" style={{ color: "#7A1C1C" }}>एक असली कहानी</p>
        <p style={{ fontSize: "13px", color: "#4A4540", lineHeight: 1.65, fontStyle: "italic", marginBottom: "10px" }}>
          &ldquo;मेरा KCC reject हुआ, bank ने सिर्फ इतना बोला — CIBIL ठीक नहीं।
          KisanSathi से जाना कि rights भी होते हैं।&rdquo;
        </p>
        <p style={{ fontSize: "11px", color: "#7A1C1C", fontWeight: 600 }}>
          — रामखेलावन, किसान, Satna MP
        </p>
      </div>

      {/* ── TRUST ── */}
      <div style={{
        margin: "0 20px 24px",
        maxWidth: "420px",
        marginLeft: "auto",
        marginRight: "auto",
        background: "#fff",
        borderRadius: "14px",
        padding: "16px 18px",
        borderTop: "3px solid #0D1F0D",
      }}>
        <p className="section-label">क्यों भरोसा करें</p>
        {[
          "🏛️ RBI के official guidelines पर based — कोई अंदाज़ा नहीं",
          "🔒 आपका data कहीं नहीं जाता — कोई form नहीं, कोई registration नहीं",
          "🌾 MP/UP belt के किसानों के लिए — Rewa, Satna, Sidhi, Ujjain",
          "📱 WhatsApp पर भी available — जहाँ आप हों",
        ].map((text, i) => (
          <div key={i} style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            marginBottom: i < 3 ? "10px" : 0,
          }}>
            <span style={{ fontSize: "16px", flexShrink: 0 }}>{text.split(" ")[0]}</span>
            <span style={{ fontSize: "12px", color: "#4A4540", lineHeight: 1.55 }}>
              {text.slice(text.indexOf(" ") + 1)}
            </span>
          </div>
        ))}
      </div>

      {/* ── WHATSAPP ── */}
      <div style={{
        padding: "0 20px",
        maxWidth: "420px",
        margin: "0 auto 32px",
        textAlign: "center",
      }}>
        <p style={{ fontSize: "13px", color: "#4A4540", marginBottom: "12px" }}>
          सवाल है? सीधे WhatsApp पर पूछो
        </p>
        <a
          href="https://wa.me/916268146820?text=Namaste%2C%20mujhe%20KisanSathi%20se%20madad%20chahiye"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp पर पूछो
        </a>
        <p style={{ fontSize: "11px", color: "#4A4540", opacity: 0.5, marginTop: "8px" }}>
          सोमवार–शनिवार, सुबह 9 बजे से शाम 6 बजे तक
        </p>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#0D1F0D",
        borderTop: "2px solid #C9A84C",
        padding: "20px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "8px",
      }}>
        <div>
          <span style={{ fontSize: "13px", fontWeight: 700, color: "#E8C76A" }}>KisanSathi</span>
          <span style={{ fontSize: "11px", color: "#5D7A5D", marginLeft: "8px" }}>
            by BankSaathi © 2025
          </span>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <Link href="/about" style={{ fontSize: "11px", color: "#5D7A5D", textDecoration: "none" }}>About</Link>
          <Link href="/complaint" style={{ fontSize: "11px", color: "#5D7A5D", textDecoration: "none" }}>Complaint Guide</Link>
        </div>
      </footer>

    </main>
  );
}