import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import ScrollToTop from "@/components/layout/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Basic SEO
  title: {
    default: "Mary Eniola | Data Analyst • Machine Learning • AI",
    template: "%s | Mary Eniola",
  },

  description:
    "Data Analyst specializing in Python, SQL, Power BI, Artificial Intelligence, and Machine Learning. Explore data analytics projects, interactive dashboards, and predictive models that transform data into actionable business insights.",

  keywords: [
    "Data Analyst",
    "Machine Learning",
    "Artificial Intelligence",
    "Python",
    "SQL",
    "Power BI",
    "Data Science",
    "Business Intelligence",
    "Predictive Analytics",
    "Data Visualization",
    "Portfolio",
    "Pandas",
    "Scikit-learn",
    "Excel",
    "Dashboard",
  ],

  authors: [
    {
      name: "Mary Eniola",
    },
  ],

  creator: "Mary Eniola",

  // Change this after deployment
  metadataBase: new URL("https://YOUR-VERCEL-URL.vercel.app"),

  // Search Engine
  robots: {
    index: true,
    follow: true,
  },

  // Browser tab icon
  icons: {
    icon: "/favicon.ico",
  },

  // Browser theme color
  themeColor: "#AD6E54",

  // LinkedIn, WhatsApp, Facebook Preview
  openGraph: {
    title: "Mary Eniola | Data Analyst • Machine Learning • AI",

    description:
      "Helping businesses transform raw data into actionable insights through analytics, dashboards, and machine learning.",

    url: "https://YOUR-VERCEL-URL.vercel.app",

    siteName: "Mary Eniola Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mary Eniola Portfolio",
      },
    ],
  },

  // Twitter / X Preview
  twitter: {
    card: "summary_large_image",

    title: "Mary Eniola | Data Analyst",

    description:
      "Portfolio showcasing Data Analytics, AI, SQL, Power BI and Machine Learning projects.",

    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <ScrollProgress />

        <Navbar />

        <main className="flex-1">{children}</main>

        <ScrollToTop />

        <Footer />
      </body>
    </html>
  );
}