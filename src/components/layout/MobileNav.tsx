"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-dark z-50 transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-white text-3xl hover:text-primary"
            aria-label="Chiudi menu"
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`py-3 text-lg font-heading font-medium transition-colors ${
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
            onClick={onClose}
            className="mt-4 bg-primary text-dark text-center py-3 rounded-full font-heading font-semibold uppercase text-sm tracking-wider"
          >
            Prenota campo
          </Link>
        </nav>
      </div>
    </>
  );
}
