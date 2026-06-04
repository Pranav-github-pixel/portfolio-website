import type { Metadata } from "next";
import { Inter, DM_Sans, Anton } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Pranav Khadse — Engineer & Builder",
  description:
    "Personal website of Pranav Khadse. Embedded systems engineer, IoT builder, and lifelong learner.",
  keywords: [
    "Pranav Khadse",
    "embedded systems",
    "IoT",
    "software engineer",
    "portfolio",
  ],
  authors: [{ name: "Pranav Khadse" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} ${anton.variable}`}
    >
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
