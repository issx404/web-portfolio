import { Spectral, Spectral_SC } from "next/font/google";
import "./globals.css";
import "./style.css";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin", "cyrillic"],
  weight: "400",
});

const spectralSc = Spectral_SC({
  variable: "--font-spectral-sc",
  subsets: ["latin", "cyrillic"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spectral.variable} ${spectralSc.variable}`}>
      <body className={spectral.className}>{children}</body>
    </html>
  );
}
