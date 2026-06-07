import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PM Kisan & सरकारी योजनाएं — KCC, PMFBY | KisanSathi",
  description: "PM Kisan Samman Nidhi, KCC loan, PM Fasal Bima — सभी सरकारी योजनाओं की जानकारी Hindi में। eligibility, documents, status check।",
  keywords: ["PM Kisan yojana", "KCC loan apply", "sarkari yojana kisan", "PM fasal bima", "kisan scheme MP"],
};

export default function SchemesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}