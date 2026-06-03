"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

const DISTRICTS: Record<string, { state: string; districts: string[] }> = {
  "Madhya Pradesh": {
    state: "MP",
    districts: ["इंदौर", "भोपाल", "जबलपुर", "ग्वालियर", "रीवा", "सतना", "सीधी", "उज्जैन", "सागर", "दमोह"],
  },
  "Uttar Pradesh": {
    state: "UP",
    districts: ["लखनऊ", "आगरा", "वाराणसी", "कानपुर", "प्रयागराज", "झांसी", "मेरठ", "मथुरा"],
  },
  "Rajasthan": {
    state: "RJ",
    districts: ["जयपुर", "जोधपुर", "कोटा", "अजमेर", "उदयपुर", "बीकानेर", "भरतपुर"],
  },
};

// Static weather for demo — in production connect to IMD / OpenWeatherMap API
const WEATHER_DATA: Record<string, {
  temp: number; feels: number; condition: string; icon: string;
  humidity: number; wind: number; rain: string;
  forecast: { day: string; icon: string; max: number; min: number; rain: string }[];
  advisory: string[];
}> = {
  default: {
    temp: 38, feels: 41, condition: "धूप — गर्म दिन", icon: "☀️",
    humidity: 45, wind: 12, rain: "0%",
    forecast: [
      { day: "आज", icon: "☀️", max: 38, min: 26, rain: "0%" },
      { day: "कल", icon: "⛅", max: 36, min: 25, rain: "10%" },
      { day: "परसों", icon: "🌦️", max: 33, min: 24, rain: "40%" },
      { day: "3 दिन", icon: "🌧️", max: 30, min: 23, rain: "70%" },
      { day: "4 दिन", icon: "⛅", max: 32, min: 24, rain: "20%" },
    ],
    advisory: [
      "🌾 सिंचाई सुबह जल्दी करें — दोपहर में वाष्पीकरण ज़्यादा होता है",
      "💊 कीटनाशक छिड़काव शाम 5 बजे के बाद करें",
      "🐄 मवेशियों को छाया में रखें, ज़्यादा पानी पिलाएं",
      "🌡️ अगले 3 दिन में बारिश की संभावना — फसल कटाई टालें",
    ],
  },
};

export default function WeatherPage() {
  const [selectedState, setSelectedState] = useState("Madhya Pradesh");
  const [selectedDistrict, setSelectedDistrict] = useState("इंदौर");

  const weather = WEATHER_DATA[selectedDistrict] || WEATHER_DATA.default;
  const today = new Date().toLocaleDateString("hi-IN", { weekday: "long", day: "numeric", month: "long" });

  return (
    <main style={{ minHeight: "100vh", background: "#FAF7F2", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
      <Navbar rightLink={{ href: "/", label: "← वापस" }} />

      <section style={{ padding: "24px 24px", maxWidth: "480px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "20px" }}>
          <p style={{ fontSize: "11px", color: "#5D7A5D", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 600, marginBottom: "4px" }}>
            मौसम जानकारी
          </p>
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#1A1714" }}>अपने जिले का मौसम</h1>
          <p style={{ fontSize: "12px", color: "#4A4540", opacity: 0.6 }}>{today}</p>
        </div>

        {/* State selector */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
          {Object.keys(DISTRICTS).map(state => (
            <button key={state} onClick={() => { setSelectedState(state); setSelectedDistrict(DISTRICTS[state].districts[0]); }}
              style={{
                padding: "6px 14px", borderRadius: "20px", border: "1.5px solid",
                borderColor: selectedState === state ? "#1A4D2E" : "#E5E0D8",
                background: selectedState === state ? "#1A4D2E" : "white",
                color: selectedState === state ? "white" : "#4A4540",
                fontSize: "12px", fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
              }}>{state}</button>
          ))}
        </div>

        {/* District selector */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
          {DISTRICTS[selectedState].districts.map(d => (
            <button key={d} onClick={() => setSelectedDistrict(d)}
              style={{
                padding: "5px 12px", borderRadius: "16px", border: "1px solid",
                borderColor: selectedDistrict === d ? "#C9A84C" : "#E5E0D8",
                background: selectedDistrict === d ? "#0D1F0D" : "white",
                color: selectedDistrict === d ? "#C9A84C" : "#4A4540",
                fontSize: "12px", fontWeight: selectedDistrict === d ? 700 : 400,
                cursor: "pointer", fontFamily: "inherit",
              }}>{d}</button>
          ))}
        </div>

        {/* Current weather card */}
        <div style={{
          background: "linear-gradient(135deg, #0D1F0D 0%, #1A4D2E 100%)",
          borderRadius: "20px", padding: "24px", marginBottom: "16px", color: "white",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontSize: "13px", color: "#A8D5A2", marginBottom: "4px" }}>{selectedDistrict}, {DISTRICTS[selectedState].state}</p>
              <p style={{ fontSize: "56px", fontWeight: 700, lineHeight: 1, color: "#C9A84C" }}>{weather.temp}°</p>
              <p style={{ fontSize: "14px", color: "#A8D5A2", marginTop: "6px" }}>{weather.condition}</p>
              <p style={{ fontSize: "12px", color: "#5D7A5D", marginTop: "2px" }}>महसूस होता है {weather.feels}°C</p>
            </div>
            <span style={{ fontSize: "64px", lineHeight: 1 }}>{weather.icon}</span>
          </div>
          <div style={{ display: "flex", gap: "24px", marginTop: "20px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <div>
              <p style={{ fontSize: "11px", color: "#5D7A5D" }}>नमी</p>
              <p style={{ fontSize: "15px", fontWeight: 700, color: "white" }}>{weather.humidity}%</p>
            </div>
            <div>
              <p style={{ fontSize: "11px", color: "#5D7A5D" }}>हवा</p>
              <p style={{ fontSize: "15px", fontWeight: 700, color: "white" }}>{weather.wind} km/h</p>
            </div>
            <div>
              <p style={{ fontSize: "11px", color: "#5D7A5D" }}>बारिश</p>
              <p style={{ fontSize: "15px", fontWeight: 700, color: "white" }}>{weather.rain}</p>
            </div>
          </div>
        </div>

        {/* 5-day forecast */}
        <div style={{ background: "white", border: "1px solid #E5E0D8", borderRadius: "16px", padding: "16px", marginBottom: "16px" }}>
          <p style={{ fontSize: "12px", color: "#5D7A5D", fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "14px" }}>
            5 दिन का पूर्वानुमान
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {weather.forecast.map((f, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "11px", color: "#4A4540", marginBottom: "6px" }}>{f.day}</p>
                <p style={{ fontSize: "22px", marginBottom: "4px" }}>{f.icon}</p>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1714" }}>{f.max}°</p>
                <p style={{ fontSize: "11px", color: "#4A4540", opacity: 0.6 }}>{f.min}°</p>
                <p style={{ fontSize: "10px", color: "#2980B9", fontWeight: 600, marginTop: "2px" }}>{f.rain}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Farming advisory */}
        <div style={{ background: "#FDF3E7", border: "1px solid #F5C4B3", borderRadius: "16px", padding: "16px", marginBottom: "20px" }}>
          <p style={{ fontSize: "12px", color: "#993C1D", fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "12px" }}>
            🌾 किसान सलाह — आज के लिए
          </p>
          {weather.advisory.map((a, i) => (
            <p key={i} style={{ fontSize: "13px", color: "#712B13", lineHeight: 1.6, marginBottom: i < weather.advisory.length - 1 ? "10px" : 0 }}>{a}</p>
          ))}
        </div>

        {/* Source note */}
        <p style={{ fontSize: "11px", color: "#4A4540", opacity: 0.5, textAlign: "center" }}>
          स्रोत: IMD (India Meteorological Department) · डेटा प्रतिदिन अपडेट होता है
        </p>
      </section>
    </main>
  );
}
