import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "आज का Live मंडी भाव — गेहूं, सोयाबीन, धान | KisanSathi",
  description: "MP, UP, Rajasthan की सभी मंडियों का आज का भाव। गेहूं, सोयाबीन, सरसों, चना — live prices from Agmarknet.",
  keywords: ["मंडी भाव", "mandi bhav today", "gehu ka bhav", "soyabean price MP", "aaj ka mandi bhav"],
};

export default function MandiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}