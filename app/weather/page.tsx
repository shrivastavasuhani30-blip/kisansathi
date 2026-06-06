"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const DISTRICTS: Record<string, { state: string; districts: { name: string; en: string }[] }> = {
  "Madhya Pradesh": {
    state: "MP",
    districts: [
      { name: "इंदौर", en: "Indore" },
      { name: "भोपाल", en: "Bhopal" },
      { name: "जबलपुर", en: "Jabalpur" },
      { name: "ग्वालियर", en: "Gwalior" },
      { name: "रीवा", en: "Rewa" },
      { name: "सतना", en: "Satna" },
      { name: "सीधी", en: "Sidhi" },
      { name: "उज्जैन", en: "Ujjain" },
      { name: "सागर", en: "Sagar" },
      { name: "दमोह", en: "Damoh" },
      { name: "विदिशा", en: "Vidisha" },
    ],
  },
  "Uttar Pradesh": {
    state: "UP",
    districts: [
      { name: "लखनऊ", en: "Lucknow" },
      { name: "आगरा", en: "Agra" },
      { name: "वाराणसी", en: "Varanasi" },
      { name: "कानपुर", en: "Kanpur" },
      { name: "प्रयागराज", en: "Prayagraj" },
      { name: "झांसी", en: "Jhansi" },
      { name: "मेरठ", en: "Meerut" },
      { name: "मथुरा", en: "Mathura" },
    ],
  },
  "Rajasthan": {
    state: "RJ",
    districts: [
      { name: "जयपुर", en: "Jaipur" },
      { name: "जोधपुर", en: "Jodhpur" },
      { name: "कोटा", en: "Kota" },
      { name: "अजमेर", en: "Ajmer" },
      { name: "उदयपुर", en: "Udaipur" },
      { name: "बीकानेर", en: "Bikaner" },
      { name: "भरतपुर", en: "Bharatpur" },
    ],
  },
};

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

function getWeatherIcon(code: number): string {
  if (code >= 200 && code < 300) return "⛈️";
  if (code >= 300 && code < 400) return "🌦️";
  if (code >= 500 && code < 600) return "🌧️";
  if (code >= 600 && code < 700) return "❄️";
  if (code >= 700 && code < 800) return "🌫️";
  if (code === 800) return "☀️";
  if (code === 801) return "🌤️";
  if (code <= 804) return "⛅";
  return "🌡️";
}

function getWeatherConditionHindi(code: number): string {
  if (code >= 200 && code < 300) return "गरज के साथ बारिश";
  if (code >= 300 && code < 400) return "हल्की बूंदाबांदी";
  if (code >= 500 && code < 600) return "बारिश";
  if (code >= 600 && code < 700) return "बर्फबारी";
  if (code >= 700 && code < 800) return "धुंध / कोहरा";
  if (code === 800) return "साफ आसमान ☀️";
  if (code <= 802) return "आंशिक बादल";
  if (code <= 804) return "बादल छाए हुए";
  return "मौसम सामान्य";
}

function getFarmingAdvisory(code: number, temp: number, humidity: number): string[] {
  const advice: string[] = [];
  if (temp > 35) {
    advice.push("🌡️ अत्यधिक गर्मी — सुबह जल्दी सिंचाई करें, दोपहर में वाष्पीकरण ज़्यादा होता है");
    advice.push("🐄 मवेशियों को छाया में रखें और भरपूर पानी पिलाएं");
  }
  if (code >= 500 && code < 600) {
    advice.push("🌧️ बारिश हो रही है — फसल कटाई टालें, खेत में जल निकासी सुनिश्चित करें");
    advice.push("💊 कीटनाशक और खाद छिड़काव बारिश के बाद करें");
  }
  if (code >= 200 && code < 300) {
    advice.push("⛈️ गरज के साथ बारिश — खेत में जाने से बचें, मशीनें सुरक्षित रखें");
  }
  if (humidity > 80) {
    advice.push("💧 नमी बहुत ज़्यादा — फंगल रोग का खतरा, फसल की निगरानी रखें");
  }
  if (code === 800 && temp < 35) {
    advice.push("🌾 अच्छा मौसम — कीटनाशक छिड़काव के लिए उचित समय");
    advice.push("✅ खेत की जुताई और बुवाई के लिए अनुकूल दिन");
  }
  if (advice.length === 0) {
    advice.push("🌾 मौसम सामान्य है — नियमित खेती कार्य जारी रखें");
    advice.push("💊 कीटनाशक छिड़काव शाम 5 बजे के बाद करें");
  }
  return advice;
}

interface WeatherData {
  temp: number;
  feels: number;
  condition: string;
  icon: string;
  humidity: number;
  wind: number;
  rain: string;
  forecast: { day: string; icon: string; max: number; min: number; rain: string }[];
  advisory: string[];
}

export default function WeatherPage() {
  const [selectedState, setSelectedState] = useState("Madhya Pradesh");
  const [selectedDistrict, setSelectedDistrict] = useState(DISTRICTS["Madhya Pradesh"].districts[0]);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const today = new Date().toLocaleDateString("hi-IN", {
    weekday: "long", day: "numeric", month: "long",
  });

  useEffect(() => {
    fetchWeather(selectedDistrict.en);
  }, [selectedDistrict]);

  async function fetchWeather(cityEn: string) {
    setLoading(true);
    setError("");
    try {
      // Current weather
      const currentRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityEn},IN&appid=${API_KEY}&units=metric`
      );
      const currentData = await currentRes.json();

      if (currentData.cod !== 200) throw new Error("City not found");

      // 5-day forecast
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityEn},IN&appid=${API_KEY}&units=metric`
      );
      const forecastData = await forecastRes.json();

      // Process forecast — pick one reading per day (noon)
      const dailyMap: Record<string, { max: number; min: number; code: number; rain: number }> = {};
      forecastData.list.forEach((item: any) => {
        const date = item.dt_txt.split(" ")[0];
        if (!dailyMap[date]) {
          dailyMap[date] = { max: item.main.temp_max, min: item.main.temp_min, code: item.weather[0].id, rain: item.pop * 100 };
        } else {
          dailyMap[date].max = Math.max(dailyMap[date].max, item.main.temp_max);
          dailyMap[date].min = Math.min(dailyMap[date].min, item.main.temp_min);
          dailyMap[date].rain = Math.max(dailyMap[date].rain, item.pop * 100);
        }
      });

      const days = ["आज", "कल", "परसों", "3 दिन", "4 दिन"];
      const forecast = Object.entries(dailyMap).slice(0, 5).map(([, v], i) => ({
        day: days[i] || `${i + 1} दिन`,
        icon: getWeatherIcon(v.code),
        max: Math.round(v.max),
        min: Math.round(v.min),
        rain: `${Math.round(v.rain)}%`,
      }));

      const code = currentData.weather[0].id;
      const temp = Math.round(currentData.main.temp);
      const humidity = currentData.main.humidity;

      setWeather({
        temp,
        feels: Math.round(currentData.main.feels_like),
        condition: getWeatherConditionHindi(code),
        icon: getWeatherIcon(code),
        humidity,
        wind: Math.round(currentData.wind.speed * 3.6),
        rain: forecast[0] ? forecast[0].rain : "0%",
        forecast,
        advisory: getFarmingAdvisory(code, temp, humidity),
      });
    } catch (e) {
      setError("मौसम डेटा लोड नहीं हो सका। दोबारा कोशिश करें।");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ minHeight: "100vh", background: "#FBF6EE", fontFamily: "'Hind', 'Noto Sans Devanagari', sans-serif" }}>
      <Navbar rightLink={{ href: "/", label: "← वापस" }} />

      <section style={{ padding: "24px 20px", maxWidth: "480px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "20px" }}>
          <p style={{ fontSize: "11px", color: "#7A1C1C", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700, marginBottom: "4px" }}>
            🌤️ मौसम जानकारी
          </p>
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#0D1F0D" }}>अपने जिले का मौसम</h1>
          <p style={{ fontSize: "12px", color: "#4A4540", opacity: 0.6 }}>{today}</p>
        </div>

        {/* State selector */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
          {Object.keys(DISTRICTS).map(state => (
            <button key={state} onClick={() => {
              setSelectedState(state);
              setSelectedDistrict(DISTRICTS[state].districts[0]);
            }} style={{
              padding: "6px 14px", borderRadius: "20px", border: "1.5px solid",
              borderColor: selectedState === state ? "#0D1F0D" : "#E5E0D8",
              background: selectedState === state ? "#0D1F0D" : "white",
              color: selectedState === state ? "#C9A84C" : "#4A4540",
              fontSize: "12px", fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
            }}>{state}</button>
          ))}
        </div>

        {/* District selector */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
          {DISTRICTS[selectedState].districts.map(d => (
            <button key={d.name} onClick={() => setSelectedDistrict(d)} style={{
              padding: "5px 12px", borderRadius: "16px", border: "1px solid",
              borderColor: selectedDistrict.name === d.name ? "#C9A84C" : "#E5E0D8",
              background: selectedDistrict.name === d.name ? "#0D1F0D" : "white",
              color: selectedDistrict.name === d.name ? "#C9A84C" : "#4A4540",
              fontSize: "12px", fontWeight: selectedDistrict.name === d.name ? 700 : 400,
              cursor: "pointer", fontFamily: "inherit",
            }}>{d.name}</button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div style={{ textAlign: "center", padding: "40px", color: "#4A4540" }}>
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>🌤️</div>
            <p style={{ fontSize: "14px" }}>मौसम डेटा लोड हो रहा है...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div style={{ background: "#FDF3E7", border: "1px solid #F5C4B3", borderRadius: "12px", padding: "16px", textAlign: "center", marginBottom: "16px" }}>
            <p style={{ fontSize: "13px", color: "#712B13" }}>{error}</p>
            <button onClick={() => fetchWeather(selectedDistrict.en)} style={{
              marginTop: "10px", padding: "8px 16px", background: "#7A1C1C", color: "white",
              border: "none", borderRadius: "8px", fontSize: "12px", cursor: "pointer",
            }}>दोबारा कोशिश करें</button>
          </div>
        )}

        {/* Weather card */}
        {!loading && weather && (
          <>
            {/* Current weather */}
            <div style={{
              background: "linear-gradient(135deg, #0D1F0D 0%, #1A4D2E 100%)",
              borderRadius: "20px", padding: "24px", marginBottom: "16px", color: "white",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p style={{ fontSize: "13px", color: "#A8D5A2", marginBottom: "4px" }}>
                    {selectedDistrict.name}, {DISTRICTS[selectedState].state}
                  </p>
                  <p style={{ fontSize: "56px", fontWeight: 700, lineHeight: 1, color: "#C9A84C" }}>
                    {weather.temp}°
                  </p>
                  <p style={{ fontSize: "14px", color: "#A8D5A2", marginTop: "6px" }}>{weather.condition}</p>
                  <p style={{ fontSize: "12px", color: "#5D7A5D", marginTop: "2px" }}>
                    महसूस होता है {weather.feels}°C
                  </p>
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
                  <p style={{ fontSize: "11px", color: "#5D7A5D" }}>बारिश संभावना</p>
                  <p style={{ fontSize: "15px", fontWeight: 700, color: "white" }}>{weather.rain}</p>
                </div>
              </div>
              {/* Live tag */}
              <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "6px", height: "6px", background: "#4CAF50", borderRadius: "50", display: "inline-block" }} />
                <span style={{ fontSize: "10px", color: "#4CAF50", fontWeight: 600 }}>
                  LIVE — OpenWeatherMap से अभी का डेटा
                </span>
              </div>
            </div>

            {/* 5-day forecast */}
            <div style={{ background: "white", border: "1px solid #E5E0D8", borderRadius: "16px", padding: "16px", marginBottom: "16px" }}>
              <p style={{ fontSize: "12px", color: "#7A1C1C", fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "14px" }}>
                5 दिन का पूर्वानुमान
              </p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {weather.forecast.map((f, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "11px", color: "#4A4540", marginBottom: "6px" }}>{f.day}</p>
                    <p style={{ fontSize: "22px", marginBottom: "4px" }}>{f.icon}</p>
                    <p style={{ fontSize: "13px", fontWeight: 700, color: "#0D1F0D" }}>{f.max}°</p>
                    <p style={{ fontSize: "11px", color: "#4A4540", opacity: 0.6 }}>{f.min}°</p>
                    <p style={{ fontSize: "10px", color: "#2980B9", fontWeight: 600, marginTop: "2px" }}>{f.rain}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Farming advisory */}
            <div style={{ background: "#FDF3E7", border: "1px solid #F5C4B3", borderRadius: "16px", padding: "16px", marginBottom: "20px" }}>
              <p style={{ fontSize: "12px", color: "#993C1D", fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "12px" }}>
                🌾 किसान सलाह — आज के लिए
              </p>
              {weather.advisory.map((a, i) => (
                <p key={i} style={{ fontSize: "13px", color: "#712B13", lineHeight: 1.6, marginBottom: i < weather.advisory.length - 1 ? "10px" : 0 }}>
                  {a}
                </p>
              ))}
            </div>

            {/* Source */}
            <p style={{ fontSize: "11px", color: "#4A4540", opacity: 0.5, textAlign: "center" }}>
              स्रोत: OpenWeatherMap · डेटा हर घंटे अपडेट होता है
            </p>
          </>
        )}
      </section>
    </main>
  );
}