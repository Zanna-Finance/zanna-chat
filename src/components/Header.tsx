"use client";
import { useBitteWallet } from "@bitte-ai/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NearWalletConnector from "./NearWalletConnector";

const Header: React.FC = () => {
  const { isConnected } = useBitteWallet();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Brand Section */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/zanna.svg"
              alt="Zanna Finance Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <div className="text-xl font-bold text-gray-900">
              Zanna<span className="text-[#ef4444]">.Finance</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/dashboard" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Dashboard
            </Link>
            <Link 
              href="/markets" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Markets
            </Link>
            <Link 
              href="/portfolio" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Portfolio
            </Link>
            
            {/* Wallet Connection */}
            <div className="flex items-center gap-4">
              <NearWalletConnector />
              {!isConnected && <div className="h-8 w-px bg-gray-200" />}
            </div>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="px-4 py-2 bg-[#ef4444] text-white rounded-md hover:bg-[#dc2626] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4`}>
          <div className="flex flex-col gap-4">
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/markets"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Markets
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <div className="py-2">
              <NearWalletConnector />
            </div>
            <Link
              href="/contact"
              className="inline-block px-4 py-2 bg-[#ef4444] text-white rounded-md hover:bg-[#dc2626] transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;