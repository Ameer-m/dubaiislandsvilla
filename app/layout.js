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
  title: "Luxury 1-4 BR Apartments in Dubai Island | Completion 2026",
  description: "Breathtaking beauty and top-tier amenities with 1-4 bedroom apartments in Dubai. Just 15 mins from the airport, 20 mins to the city center. Completion in 2026. Payment plan: 60/40",
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
