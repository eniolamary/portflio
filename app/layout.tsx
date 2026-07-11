import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mary Eniola | Data Analyst | Data Scientist",
    template: "%s | Mary Eniola",
  },
  description:
    "Professional portfolio showcasing data analysis, SQL, Power BI, Python, and machine learning projects focused on solving real business problems.",

  keywords: [
    "Data Analyst",
    "Machine Learning",
    "Python",
    "SQL",
    "Power BI",
    "Data Science",
    "Business Intelligence",
    "Portfolio",
  ],

  authors: [
    {
      name: "Mary Eniola",
    },
  ],

  creator: "Mary Eniola",

  openGraph: {
    title: "Mary Eniola | Data Analyst",
    description:
      "Helping businesses make smarter decisions through data analysis, dashboards, and machine learning.",
    type: "website",
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

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
