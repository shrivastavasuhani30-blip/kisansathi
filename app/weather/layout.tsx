import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "आज का मौसम — अपने जिले का Weather | KisanSathi",
  description: "MP, UP, Rajasthan के सभी जिलों का live मौसम। बारिश, तापमान, हवा — किसानों के लिए फसल सलाह के साथ।",
  keywords: ["मौसम", "aaj ka mausam", "kisan mausam", "weather MP UP", "fasal salah mausam"],
};

export default function WeatherLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}