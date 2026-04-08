"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 bg-dark text-white">
      <div className="container-site flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="font-heading font-bold text-xl lg:text-2xl tracking-tight">
          DICA <span className="text-primary">PADEL</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-heading font-medium uppercase tracking-wider transition-colors ${
                pathname === item.href
                  ? "text-primary"
                  : "text-white hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/prenota-campo"
            className="ml-2 bg-primary text-dark px-5 py-2 rounded-full font-heading font-semibold text-sm uppercase tracking-wider hover:bg-primary-dark transition-colors"
          >
            Prenota campo
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Apri menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
