import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ansh Vinay Pandey - Full Stack Web Developer & MERN Specialist",
  description: "A passionate full-stack web developer specializing in MERN stack and AI integration. Crafting scalable, user-centric web applications with modern technologies and innovative solutions.",
  keywords: [
    "Ansh Pandey",
    "Web Developer",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "AI Integration",
    "Web Design",
    "Portfolio",
  ],
  authors: [{ name: "Ansh Vinay Pandey" }],
  creator: "Ansh Vinay Pandey",
  publisher: "Ansh Vinay Pandey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anshuap.com",
    title: "Ansh Vinay Pandey - Full Stack Web Developer & MERN Specialist",
    description: "A passionate full-stack web developer specializing in MERN stack and AI integration.",
    siteName: "Ansh Vinay Pandey Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansh Vinay Pandey - Full Stack Web Developer & MERN Specialist",
    description: "A passionate full-stack web developer specializing in MERN stack and AI integration.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ibiimemon.com" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
