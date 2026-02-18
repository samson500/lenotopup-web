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
  title: "LENOTOPUP - Earn Daily From Airtime & Bill Payments",
  description:
    "LENOTOPUP allows you earn up to 10% commission when others purchase airtime, data or pay bills. Withdraw twice weekly and earn daily from social media tasks.",
  keywords: [
    "LENOTOPUP",
    'lenotopup',
    'leno topup', 
    "Earn money Nigeria",
    "Airtime commission",
    "Bill payment commission",
    "VTU business",
    "Make money online Nigeria",
  ],
  openGraph: {
    title: "LENOTOPUP - Earn Daily From Airtime & Bill Payments",
    description:
      "Earn up to ₦18,850 daily and withdraw directly to your local bank account. Become a LENOTOPUP agent today.",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
