import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Luxury Villas on Dubai Islands | Nakheel Bay Villas with Stunning Views",
  description: "Discover the unrivaled luxury of Nakheel Bay Villas on Dubai's islands. Enjoy modern designs, breathtaking water views and a flexible payment plan. Delivery Q2 2027.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        {/* ✅ Preload Adobe Fonts */}
        <link rel="preload" as="style" href="https://use.typekit.net/anv6qns.css" />

        {/* ✅ Load Fonts Immediately (Fixes Next.js Delayed Hydration Issue) */}
        <link rel="stylesheet" href="https://use.typekit.net/anv6qns.css" />

      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        
      </body>
    </html>
  );
}
