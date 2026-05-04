import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Variable } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dental-app AI powered dental assistant",
  description: "Get 24/7 dental assistance",
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
      <body className="min-h-full flex flex-col dark">
        <ClerkProvider
          appearance={{
            variables: {
              colorPrimary: "#e78a53",
              colorBackground: "#f3f4f6",
              colorText: "#111827",
              colorTextSecondary: "#6b7280",
              colorInputBackground: "#f3f4f6",
            },
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
