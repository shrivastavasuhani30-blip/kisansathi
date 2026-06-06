"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const CROPS = ["Wheat", "Paddy(Common)", "Soyabean", "Maize", "Mustard", "Gram", "Arhar(Tur)", "Onion", "Potato", "Tomato"];

const CROP_HINDI: Record<string, string> = {
  "Wheat": "गेहूं",
  "Paddy(Common)": "धान",
  "Soyabean": "सोयाबीन",
  "Maize": "मक्का",
  "Mustard": "सरसों",
  "Gram": "चना",
  "Arhar(Tur)": "अरहर",
  "Onion": "प्याज",
  "Potato": "आलू",
  "Tomato": "टमाटर",
};

const MSP: Record<string, number> = {
  "Wheat": 2275,
  "Paddy(Common)": 2183,
  "Soyabean": 4600,
  "Mustard": 5650,
  "Maize": 2090,
  "Gram": 5440,
  "Arhar(Tur)": 7000,
};

const API_KEY = process.env.NEXT_PUBLIC_MANDI_API_KEY;

interface MandiRecord {
  mandi: string;
  state: string;
  price: number;
  min: number;
  max: number;
  unit: string;
}

export default function MandiPage() {
  const [selectedCrop, setSelectedCrop] = useState("Wheat");
  const [data, setData] = useState<MandiRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    fetchMandi(selectedCrop);
  }, [selectedCrop]);

  async function fetchMandi(crop: string) {
    setLoading(true);
    setError("");
    setData([]);
    try {
      const url = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${API_KEY}&format=json&filters[commodity]=${encodeURIComponent(crop)}&limit=20`;
      const res = await fetch(url);
      const json = await res.json();

      if (!json.records || json.records.length === 0) {
        setError("आज इस फसल का डेटा उपलब्ध नहीं है। कल फिर देखें।");
        setLoading(false);
        return;
      }

      const records: MandiRecord[] = json.records.map((r: any) => ({
        mandi: r.market || r.apmc || "—",
        state: r.state || "—",
        price: Math.round(Number(r.modal_price) || Number(r.min_price) || 0),
        min: Math.round(Number(r.min_price) || 0),
        max: Math.round(Number(r.max_price) || 0),
        unit: "₹/क्विंटल",
      }));

      // Sort by modal price descending
      records.sort((a, b) => b.price - a.price);

      setData(records);
      setLastUpdated(new Date().toLocaleDateString("hi-IN", {
        day: "numeric", month: "long", hour: "2-digit", minute: "2-digit"
      }));
    } catch (e) {
      setError("डेटा लोड नहीं हो सका। इंटरनेट चेक करें और दोबारा कोशिश करें।");
    } finally {
      setLoading(false);
    }
  }

  const avgPrice = data.length
    ? Math.round(data.reduce((s, d) => s + d.price, 0) / data.length)
    : 0;

  const maxPrice = data.length ? Math.max(...data.map(d => d.price)) : 0;
  const minPrice = data.length ? Math.min(...data.map(d => d.price)) : 0;

  return (
    <main style={{ minHeight: "100vh", background: "#FBF6EE", fontFamily: "'Hind', 'Noto Sans Devanagari', sans-serif" }}>
      <Navbar rightLink={{ href: "/", label: "← वापस" }} />

      <section style={{ padding: "24px 20px", maxWidth: "480px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "20px" }}>
          <p style={{ fontSize: "11px", color: "#7A1C1C", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700, marginBottom: "4px" }}>
            📊 आज का मंडी भाव
          </p>
          <h1 style={{ fontSize: "26px", fontWeight: 700, color: "#0D1F0D", marginBottom: "4px" }}>
            Live मंडी Rates
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: "6px", height: "6px", background: "#4CAF50", borderRadius: "50%", display: "inline-block" }} />
            <p style={{ fontSize: "12px", color: "#4A4540" }}>
              {lastUpdated ? `अपडेट: ${lastUpdated}` : "data.gov.in से live डेटा"}
            </p>
          </div>
        </div>

        {/* Crop selector */}
        <div style={{ marginBottom: "20px" }}>
          <p style={{ fontSize: "12px", color: "#4A4540", fontWeight: 600, marginBottom: "10px" }}>फसल चुनें:</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {CROPS.map(crop => (
              <button key={crop} onClick={() => setSelectedCrop(crop)} style={{
                padding: "7px 14px", borderRadius: "20px", border: "1.5px solid",
                borderColor: selectedCrop === crop ? "#0D1F0D" : "#E5E0D8",
                background: selectedCrop === crop ? "#0D1F0D" : "white",
                color: selectedCrop === crop ? "#C9A84C" : "#4A4540",
                fontSize: "13px", fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
              }}>{CROP_HINDI[crop]}</button>
            ))}
          </div>
        </div>

        {/* MSP banner */}
        {MSP[selectedCrop] && (
          <div style={{
            background: "#F0FAF2", border: "1px solid #B3DEC1",
            borderRadius: "12px", padding: "12px 16px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: "16px",
          }}>
            <div>
              <p style={{ fontSize: "11px", color: "#27500A", fontWeight: 600 }}>सरकारी MSP 2024-25</p>
              <p style={{ fontSize: "20px", fontWeight: 700, color: "#1A4D2E" }}>
                ₹{MSP[selectedCrop].toLocaleString("hi-IN")}
              </p>
            </div>
            <div style={{ fontSize: "12px", color: "#27500A", textAlign: "right" }}>
              <p>प्रति क्विंटल</p>
              <p style={{ opacity: 0.7 }}>न्यूनतम समर्थन मूल्य</p>
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div style={{ textAlign: "center", padding: "40px", color: "#4A4540" }}>
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>🌾</div>
            <p style={{ fontSize: "14px" }}>मंडी भाव लोड हो रहा है...</p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div style={{
            background: "#FDF3E7", border: "1px solid #F5C4B3",
            borderRadius: "12px", padding: "16px", textAlign: "center", marginBottom: "16px",
          }}>
            <p style={{ fontSize: "13px", color: "#712B13", marginBottom: "10px" }}>{error}</p>
            <button onClick={() => fetchMandi(selectedCrop)} style={{
              padding: "8px 16px", background: "#7A1C1C", color: "white",
              border: "none", borderRadius: "8px", fontSize: "12px", cursor: "pointer",
            }}>दोबारा कोशिश करें</button>
          </div>
        )}

        {/* Stats */}
        {!loading && data.length > 0 && (
          <>
            {/* Average price */}
            <div style={{
              background: "#0D1F0D", borderRadius: "12px",
              padding: "14px 16px", marginBottom: "12px",
            }}>
              <p style={{ fontSize: "11px", color: "#A8D5A2", marginBottom: "4px" }}>
                {CROP_HINDI[selectedCrop]} — औसत बाज़ार भाव ({data.length} मंडियां)
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <p style={{ fontSize: "28px", fontWeight: 700, color: "#C9A84C" }}>
                  ₹{avgPrice.toLocaleString("hi-IN")}
                </p>
                <p style={{ fontSize: "11px", color: "#5D7A5D" }}>प्रति क्विंटल</p>
              </div>
              <div style={{ display: "flex", gap: "16px", marginTop: "10px", paddingTop: "10px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <div>
                  <p style={{ fontSize: "10px", color: "#5D7A5D" }}>सबसे कम</p>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "#E74C3C" }}>₹{minPrice.toLocaleString("hi-IN")}</p>
                </div>
                <div>
                  <p style={{ fontSize: "10px", color: "#5D7A5D" }}>सबसे ज़्यादा</p>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "#27AE60" }}>₹{maxPrice.toLocaleString("hi-IN")}</p>
                </div>
                <div>
                  <p style={{ fontSize: "10px", color: "#5D7A5D" }}>MSP से तुलना</p>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: avgPrice >= (MSP[selectedCrop] || 0) ? "#27AE60" : "#E74C3C" }}>
                    {MSP[selectedCrop]
                      ? avgPrice >= MSP[selectedCrop]
                        ? `▲ +₹${(avgPrice - MSP[selectedCrop]).toLocaleString("hi-IN")}`
                        : `▼ -₹${(MSP[selectedCrop] - avgPrice).toLocaleString("hi-IN")}`
                      : "—"}
                  </p>
                </div>
              </div>
            </div>

            {/* Mandi list */}
            <p style={{ fontSize: "12px", color: "#7A1C1C", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "10px" }}>
              मंडी वार भाव
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
              {data.map((d, i) => (
                <div key={i} style={{
                  background: "white", borderRadius: "12px", padding: "13px 15px",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  borderLeft: `3px solid ${d.price === maxPrice ? "#27AE60" : d.price === minPrice ? "#E74C3C" : "#C9A84C"}`,
                }}>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 700, color: "#0D1F0D" }}>{d.mandi}</p>
                    <p style={{ fontSize: "11px", color: "#4A4540", opacity: 0.7 }}>{d.state}</p>
                    <p style={{ fontSize: "10px", color: "#888", marginTop: "2px" }}>
                      ₹{d.min.toLocaleString()} – ₹{d.max.toLocaleString()}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: "17px", fontWeight: 700, color: "#0D1F0D" }}>
                      ₹{d.price.toLocaleString("hi-IN")}
                    </p>
                    <p style={{ fontSize: "10px", color: "#888" }}>modal price</p>
                    {d.price === maxPrice && (
                      <span style={{ fontSize: "10px", background: "#E8F5E9", color: "#27AE60", padding: "2px 6px", borderRadius: "8px", fontWeight: 700 }}>सबसे ज़्यादा ⭐</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/916268146820?text=Namaste%2C%20mujhe%20aaj%20ka%20mandi%20bhav%20chahiye"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
            background: "#25D366", color: "white", fontSize: "14px", fontWeight: 600,
            padding: "14px", borderRadius: "14px", textDecoration: "none",
            marginBottom: "12px",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp पर रोज़ भाव पाएं
        </a>
        <p style={{ fontSize: "11px", color: "#4A4540", opacity: 0.5, textAlign: "center" }}>
          स्रोत: data.gov.in · Agmarknet · भाव सांकेतिक हैं, खरीद-बिक्री से पहले स्थानीय मंडी से confirm करें
        </p>
      </section>
    </main>
  );
}