import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Providers from "./providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0e0d" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Jarble Wiki",
    template: "%s | Jarble Wiki",
  },
  description: "Documentation, tutorials, roadmap, and changelog for the Jarble platform.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Jarble Wiki",
    description: "Documentation, tutorials, roadmap, and changelog for the Jarble platform.",
    type: "website",
    url: "https://wiki.jarble.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jarble Wiki",
    description: "Documentation, tutorials, roadmap, and changelog for the Jarble platform.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
