import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import BackToTop from "@/components/common/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://kriva-five.vercel.app/"),

  title: "Kaijuu Crew",

  description:
    "About Stack Audio - our story, team, and commitment to craftsmanship.",

  openGraph: {
    title: "Kaijuu crew",

    description:
      "About Stack Audio - our story, team, and commitment to craftsmanship.",

    url: "https://kriva-five.vercel.app/",

    siteName: "Stack Audio",

    images: [
      {
        url: "/assets/images/png/meta.png",
        width: 1200,
        height: 630,
        alt: "Stack Audio",
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["/assets/images/png/meta.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        {children}

        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
