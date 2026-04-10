"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30">
      {/* Top yellow accent line */}
      <div className="h-1 bg-primary" />

      <div className="bg-white text-dark">
        <div className="flex items-center justify-between h-14 lg:h-16 pl-4 md:pl-6 pr-4 md:pr-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 mr-auto">
            <Image
              src="/images/icons/logo.png"
              alt="DICA Padel Center"
              width={110}
              height={67}
              className="h-14 lg:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-heading font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? "bg-primary text-dark"
                      : "text-dark hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Prenota Campo CTA */}
            <Link
              href="/prenota-campo"
              className="ml-6 flex items-center gap-2 bg-primary text-dark px-6 py-2.5 rounded-full font-heading font-bold text-sm uppercase tracking-wider hover:bg-primary-dark transition-colors"
            >
              Prenota campo
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                <path d="M13.59 16.59L18.17 12 13.59 7.41 15 6l6 6-6 6z" />
              </svg>
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-dark p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Apri menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom yellow accent line */}
      <div className="h-1 bg-primary" />

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
