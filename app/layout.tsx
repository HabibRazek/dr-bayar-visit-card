import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Dr. Bayar Mourad - Chirurgien Dentiste | Prothèse & Implantologie",
  description: "Dr. Bayar Mourad, Chirurgien Dentiste diplômé de l'UFR d'Odontologie de Marseille. Spécialiste en Prothèse Dentaire, Implantologie Orale et Chirurgie Parodontale. Cabinet situé à l'Imm. JASMIN MEDICAL.",
  keywords: ["dentiste", "chirurgien dentiste", "implantologie", "prothèse dentaire", "chirurgie parodontale", "Dr Bayar", "JASMIN MEDICAL"],
  authors: [{ name: "Dr. Bayar Mourad" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dr. Bayar Mourad",
  },
  openGraph: {
    title: "Dr. Bayar Mourad - Chirurgien Dentiste",
    description: "Spécialiste en Prothèse Dentaire, Implantologie Orale et Chirurgie Parodontale",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
