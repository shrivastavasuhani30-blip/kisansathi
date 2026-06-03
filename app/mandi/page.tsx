"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const CROPS = ["गेहूं", "धान", "सोयाबीन", "मक्का", "सरसों", "चना", "अरहर", "प्याज", "आलू", "टमाटर"];
const STATES = ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Maharashtra", "Punjab"];

// Static mandi data (fallback / demo) — replace with live API when ready
const MANDI_DATA: Record<string, { mandi: string; state: string; price: number; unit: string; change: number }[]> = {
  "गेहूं": [
    { mandi: "इंदौर", state: "MP", price: 2280, unit: "₹/क्विंटल", change: +40 },
    { mandi: "भोपाल", state: "MP", price: 2250, unit: "₹/क्विंटल", change: -20 },
    { mandi: "लखनऊ", state: "UP", price: 2310, unit: "₹/क्विंटल", change: +15 },
    { mandi: "जयपुर", state: "RJ", price: 2290, unit: "₹/क्विंटल", change: +30 },
    { mandi: "सागर", state: "MP", price: 2240, unit: "₹/क्विंटल", change: -10 },
  ],
  "सोयाबीन": [
    { mandi: "इंदौर", state: "MP", price: 4450, unit: "₹/क्विंटल", change: +80 },
    { mandi: "उज्जैन", state: "MP", price: 4380, unit: "₹/क्विंटल", change: +50 },
    { mandi: "नागपुर", state: "MH", price: 4520, unit: "₹/क्विंटल", change: +100 },
    { mandi: "कोटा", state: "RJ", price: 4400, unit: "₹/क्विंटल", change: +60 },
  ],
  "धान": [
    { mandi: "रायपुर", state: "CG", price: 2183, unit: "₹/क्विंटल", change: 0 },
    { mandi: "लखनऊ", state: "UP", price: 2200, unit: "₹/क्विंटल", change: +17 },
    { mandi: "पटना", state: "BR", price: 2150, unit: "₹/क्विंटल", change: -33 },
  ],
  "सरसों": [
    { mandi: "जयपुर", state: "RJ", price: 5200, unit: "₹/क्विंटल", change: +120 },
    { mandi: "भरतपुर", state: "RJ", price: 5150, unit: "₹/क्विंटल", change: +90 },
    { mandi: "आगरा", state: "UP", price: 5180, unit: "₹/क्विंटल", change: +110 },
  ],
  "मक्का": [
    { mandi: "इंदौर", state: "MP", price: 1980, unit: "₹/क्विंटल", change: -30 },
    { mandi: "पटना", state: "BR", price: 2020, unit: "₹/क्विंटल", change: +10 },
    { mandi: "लुधियाना", state: "PB", price: 2100, unit: "₹/क्विंटल", change: +40 },
  ],
  "चना": [
    { mandi: "इंदौर", state: "MP", price: 5600, unit: "₹/क्विंटल", change: +200 },
    { mandi: "जयपुर", state: "RJ", price: 5550, unit: "₹/क्विंटल", change: +180 },
    { mandi: "नागपुर", state: "MH", price: 5650, unit: "₹/क्विंटल", change: +220 },
  ],
  "अरहर": [
    { mandi: "नागपुर", state: "MH", price: 7200, unit: "₹/क्विंटल", change: +300 },
    { mandi: "इंदौर", state: "MP", price: 7100, unit: "₹/क्विंटल", change: +250 },
  ],
  "प्याज": [
    { mandi: "नासिक", state: "MH", price: 1200, unit: "₹/क्विंटल", change: -150 },
    { mandi: "इंदौर", state: "MP", price: 1350, unit: "₹/क्विंटल", change: -80 },
  ],
  "आलू": [
    { mandi: "आगरा", state: "UP", price: 900, unit: "₹/क्विंटल", change: +50 },
    { mandi: "इंदौर", state: "MP", price: 950, unit: "₹/क्विंटल", change: +40 },
  ],
  "टमाटर": [
    { mandi: "इंदौर", state: "MP", price: 2500, unit: "₹/क्विंटल", change: +800 },
    { mandi: "नासिक", state: "MH", price: 2200, unit: "₹/क्विंटल", change: +600 },
  ],
};

export default function MandiPage() {
  const [selectedCrop, setSelectedCrop] = useState("गेहूं");
  const [lastUpdated] = useState(() => {
    const now = new Date();
    return now.toLocaleDateString("hi-IN", { day: "numeric", month: "long", year: "numeric" });
  });

  const data = MANDI_DATA[selectedCrop] || [];
  const avgPrice = data.length ? Math.round(data.reduce((s, d) => s + d.price, 0) / data.length) : 0;
  const msp: Record<string, number> = {
    "गेहूं": 2275, "धान": 2183, "सोयाबीन": 4600, "सरसों": 5650,
    "मक्का": 2090, "चना": 5440, "अरहर": 7000,
  };

  return (
    <main style={{ minHeight: "100vh", background: "#FAF7F2", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
      <Navbar rightLink={{ href: "/", label: "← वापस" }} />

      <section style={{ padding: "28px 24px", maxWidth: "480px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "24px" }}>
          <p style={{ fontSize: "11px", color: "#5D7A5D", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, marginBottom: "6px" }}>
            आज का मंडी भाव
          </p>
          <h1 style={{ fontSize: "26px", fontWeight: 700, color: "#1A1714", marginBottom: "4px" }}>
            Live मंडी Rates
          </h1>
          <p style={{ fontSize: "12px", color: "#4A4540", opacity: 0.6 }}>
            अपडेट: {lastUpdated} · Rajasthan, MP, UP
          </p>
        </div>

        {/* Crop selector */}
        <div style={{ marginBottom: "20px" }}>
          <p style={{ fontSize: "12px", color: "#4A4540", fontWeight: 600, marginBottom: "10px" }}>फसल चुनें:</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {CROPS.map(crop => (
              <button
                key={crop}
                onClick={() => setSelectedCrop(crop)}
                style={{
                  padding: "7px 14px", borderRadius: "20px", border: "1.5px solid",
                  borderColor: selectedCrop === crop ? "#1A4D2E" : "#E5E0D8",
                  background: selectedCrop === crop ? "#1A4D2E" : "white",
                  color: selectedCrop === crop ? "white" : "#4A4540",
                  fontSize: "13px", fontWeight: 600, cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >{crop}</button>
            ))}
          </div>
        </div>

        {/* MSP banner */}
        {msp[selectedCrop] && (
          <div style={{
            background: "#F0FAF2", border: "1px solid #B3DEC1",
            borderRadius: "12px", padding: "12px 16px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: "16px",
          }}>
            <div>
              <p style={{ fontSize: "11px", color: "#27500A", fontWeight: 600, letterSpacing: "0.5px" }}>सरकारी MSP 2024-25</p>
              <p style={{ fontSize: "20px", fontWeight: 700, color: "#1A4D2E" }}>₹{msp[selectedCrop].toLocaleString("hi-IN")}</p>
            </div>
            <div style={{ fontSize: "12px", color: "#27500A", textAlign: "right" }}>
              <p>प्रति क्विंटल</p>
              <p style={{ opacity: 0.7 }}>न्यूनतम समर्थन मूल्य</p>
            </div>
          </div>
        )}

        {/* Avg price */}
        {avgPrice > 0 && (
          <div style={{
            background: "#0D1F0D", borderRadius: "12px",
            padding: "14px 16px", display: "flex",
            justifyContent: "space-between", alignItems: "center", marginBottom: "16px",
          }}>
            <div>
              <p style={{ fontSize: "11px", color: "#A8D5A2", marginBottom: "2px" }}>{selectedCrop} — औसत बाज़ार भाव</p>
              <p style={{ fontSize: "24px", fontWeight: 700, color: "#C9A84C" }}>₹{avgPrice.toLocaleString("hi-IN")}</p>
            </div>
            <p style={{ fontSize: "11px", color: "#5D7A5D" }}>प्रति क्विंटल</p>
          </div>
        )}

        {/* Mandi list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
          {data.map((d, i) => (
            <div key={i} style={{
              background: "white", border: "1px solid #E5E0D8",
              borderRadius: "14px", padding: "14px 16px",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div>
                <p style={{ fontSize: "15px", fontWeight: 700, color: "#1A1714" }}>{d.mandi}</p>
                <p style={{ fontSize: "12px", color: "#4A4540", opacity: 0.6 }}>{d.state} मंडी</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "17px", fontWeight: 700, color: "#1A4D2E" }}>₹{d.price.toLocaleString("hi-IN")}</p>
                <p style={{
                  fontSize: "12px", fontWeight: 600,
                  color: d.change > 0 ? "#27AE60" : d.change < 0 ? "#E74C3C" : "#4A4540",
                }}>
                  {d.change > 0 ? `▲ +${d.change}` : d.change < 0 ? `▼ ${d.change}` : "— कोई बदलाव नहीं"}
                </p>
              </div>
            </div>
          ))}

          {data.length === 0 && (
            <div style={{ textAlign: "center", padding: "40px", color: "#4A4540", opacity: 0.5 }}>
              <p style={{ fontSize: "32px", marginBottom: "8px" }}>🌾</p>
              <p>इस फसल का डेटा जल्द आएगा</p>
            </div>
          )}
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/917000000000?text=Namaste%2C%20mujhe%20aaj%20ka%20mandi%20bhav%20chahiye"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
            background: "#25D366", color: "white", fontSize: "14px", fontWeight: 600,
            padding: "14px", borderRadius: "14px", textDecoration: "none",
            boxShadow: "0 3px 0 #1aaa4e", marginBottom: "12px",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp पर रोज़ भाव पाएं
        </a>
        <p style={{ fontSize: "11px", color: "#4A4540", opacity: 0.5, textAlign: "center" }}>
          * भाव सांकेतिक हैं। खरीद-बिक्री से पहले स्थानीय मंडी से confirm करें।
        </p>
      </section>
    </main>
  );
}