import type { Metadata } from "next";
import WalletProvider from "@/context/WalletProvider";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "RainbowKit Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen w-full flex-col items-center">
        <WalletProvider>
          <main className="flex h-screen w-screen max-w-5xl flex-col items-center px-4">
            <Header />
            {children}
          </main>
        </WalletProvider>
      </body>
    </html>
  );
}
