import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./header/page";
import Footer from "./footer/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Class Hackathon Project",
  description: "Assigned For the Hands on Practice on Next JS",
};

export default function RootLayout({
 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
