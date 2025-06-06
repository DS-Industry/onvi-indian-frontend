import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@/styles/fonts.scss';
import "./globals.css";
import { UserProvider } from "@/context/UserProvider";
import { ConfigProvider } from "antd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onvi Indian App",
  description: "Generated by create next app",
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
      >
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Arial, Helvetica, sans-serif", // <-- Global override
            },
          }}
        >
          <UserProvider>
            {children}
          </UserProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
