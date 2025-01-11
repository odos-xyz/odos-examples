"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between py-8">
      <Link className="mr-2 flex items-center space-x-2" href="/">
        <h1>🌈</h1>
      </Link>
      <ConnectButton accountStatus="full" chainStatus="full" showBalance />
    </header>
  );
};

export default Header;
