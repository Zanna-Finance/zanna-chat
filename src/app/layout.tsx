import WalletProvider from "@/providers/WalletProvider";
import "@near-wallet-selector/modal-ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zanna AI - Your DeFi Assistant",
  description: "Your DeFi assistant for the NEAR Protocol ecosystem",
  icons: {
    icon: '/zanna.svg',
    shortcut: '/zanna.svg',
    apple: '/zanna.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/zanna.svg" type="image/svg+xml" />
      </head>
      <WalletProvider>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </WalletProvider>
    </html>
  );
}