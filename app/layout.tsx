import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KisanSathi — किसान का डिजिटल साथी | Loan, Mandi & Kisan Guide",
  description:
    "KisanSathi helps Indian farmers understand loan rejections, access mandi prices, government schemes, and agri advice. MP/UP belt farmers — RBI-based, free, no registration needed.",
  keywords: [
    "kisan loan guide",
    "KCC loan reject reason",
    "mandi bhav today",
    "PM Kisan Yojana",
    "farmer loan help Hindi",
    "KisanSathi",
    "agri tech India",
    "fasal loan MP UP",
  ],
  openGraph: {
    title: "KisanSathi — किसान का डिजिटल साथी",
    description:
      "Loan rejection reason samjho, mandi prices dekho, sarkari yojana pata karo. MP/UP farmers ke liye — bilkul free.",
    url: "https://kisansathi-rjmv.vercel.app",
    siteName: "KisanSathi",
    locale: "hi_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KisanSathi — किसान का डिजिटल साथी",
    description: "India's digital assistant for farmers. Free loan guide, mandi prices & more.",
  },
  verification: {
    google: "O3jigwToEM3b49Z_PcO7pNq7c0gdBEnXN9ca2Nk9Qp8",
  },
  alternates: {
    canonical: "https://kisansathi-rjmv.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className={`${dmSans.variable} h-full antialiased`}>
      <head>
  <link rel="manifest" href="/manifest.json" />
  <meta name="theme-color" content="#0D1F0D" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-title" content="KisanSathi" />
</head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
