"use client";

import { useEffect, useRef } from "react";

const YELLOW_TEXT =
  "AREA RELAX  ❯  IMPIANTO RISCALDATO  ❯  VETRI 8+8  ❯  BAR  ❯  5 CAMPI AL COPERTO  ❯  ";
const BLUE_TEXT =
  "VETRI 8+8  ❯  AREA RELAX  ❯  BAR  ❯  5 CAMPI AL COPERTO  ❯  IMPIANTO RISCALDATO  ❯  ";

function repeat(text: string, times: number) {
  return Array.from({ length: times }, () => text).join("");
}

export function FeatureBanners() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const yellowRef = useRef<HTMLDivElement>(null);
  const blueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!wrapperRef.current || !yellowRef.current || !blueRef.current) {
          ticking = false;
          return;
        }

        const rect = wrapperRef.current.getBoundingClientRect();
        const windowH = window.innerHeight;
        const progress =
          1 - (rect.top + rect.height) / (windowH + rect.height);
        const offset = progress * 600;

        yellowRef.current.style.transform = `translate3d(${-offset}px, 0, 0)`;
        blueRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;

        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="absolute bottom-0 left-0 right-0 z-20"
    >
      {/* Yellow banner — angled upward to the right */}
      <div
        className="relative w-[250vw] -ml-[50vw]"
        style={{ transform: "rotate(-2.5deg)", transformOrigin: "center" }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-[5px]"
          style={{
            background: "#F5C518",
            clipPath:
              "polygon(0% 60%, 2% 20%, 4% 80%, 6% 30%, 8% 70%, 10% 10%, 12% 90%, 14% 40%, 16% 60%, 18% 20%, 20% 80%, 22% 50%, 24% 30%, 26% 70%, 28% 10%, 30% 90%, 32% 45%, 34% 65%, 36% 15%, 38% 85%, 40% 35%, 42% 55%, 44% 25%, 46% 75%, 48% 5%, 50% 95%, 52% 40%, 54% 60%, 56% 20%, 58% 80%, 60% 30%, 62% 70%, 64% 50%, 66% 10%, 68% 90%, 70% 35%, 72% 65%, 74% 15%, 76% 85%, 78% 45%, 80% 55%, 82% 25%, 84% 75%, 86% 5%, 88% 95%, 90% 40%, 92% 60%, 94% 20%, 96% 80%, 98% 50%, 100% 30%)",
          }}
        />
        <div
          className="overflow-hidden"
          style={{
            backgroundColor: "#F5C518",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <div
            ref={yellowRef}
            className="whitespace-nowrap py-2.5 md:py-3.5 will-change-transform"
          >
            <span
              className="text-base md:text-2xl lg:text-3xl font-extrabold tracking-wide"
              style={{
                fontFamily: "var(--font-heading)",
                color: "#0A1940",
              }}
            >
              {repeat(YELLOW_TEXT, 14)}
            </span>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-[5px]"
          style={{
            background: "#F5C518",
            clipPath:
              "polygon(0% 40%, 2% 80%, 4% 20%, 6% 70%, 8% 30%, 10% 90%, 12% 10%, 14% 60%, 16% 40%, 18% 80%, 20% 20%, 22% 50%, 24% 70%, 26% 30%, 28% 90%, 30% 10%, 32% 55%, 34% 35%, 36% 85%, 38% 15%, 40% 65%, 42% 45%, 44% 75%, 46% 25%, 48% 95%, 50% 5%, 52% 60%, 54% 40%, 56% 80%, 58% 20%, 60% 70%, 62% 30%, 64% 50%, 66% 90%, 68% 10%, 70% 65%, 72% 35%, 74% 85%, 76% 15%, 78% 55%, 80% 45%, 82% 75%, 84% 25%, 86% 95%, 88% 5%, 90% 60%, 92% 40%, 94% 80%, 96% 20%, 98% 50%, 100% 70%)",
          }}
        />
      </div>

      {/* Blue banner — angled downward to the right, overlapping yellow */}
      <div
        className="relative w-[250vw] -ml-[50vw] -mt-2 md:-mt-3"
        style={{ transform: "rotate(1.5deg)", transformOrigin: "center" }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-[5px]"
          style={{
            background: "#0A1940",
            clipPath:
              "polygon(0% 50%, 3% 20%, 5% 70%, 8% 40%, 10% 80%, 13% 10%, 15% 60%, 18% 30%, 20% 90%, 23% 50%, 25% 20%, 28% 70%, 30% 40%, 33% 80%, 35% 10%, 38% 60%, 40% 30%, 43% 90%, 45% 50%, 48% 20%, 50% 70%, 53% 40%, 55% 80%, 58% 10%, 60% 60%, 63% 30%, 65% 90%, 68% 50%, 70% 20%, 73% 70%, 75% 40%, 78% 80%, 80% 10%, 83% 60%, 85% 30%, 88% 90%, 90% 50%, 93% 20%, 95% 70%, 98% 40%, 100% 80%)",
          }}
        />
        <div
          className="overflow-hidden"
          style={{
            backgroundColor: "#0A1940",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          <div
            ref={blueRef}
            className="whitespace-nowrap py-2.5 md:py-3.5 will-change-transform"
          >
            <span
              className="text-base md:text-2xl lg:text-3xl font-extrabold tracking-wide text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {repeat(BLUE_TEXT, 14)}
            </span>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-[5px]"
          style={{
            background: "#0A1940",
            clipPath:
              "polygon(0% 60%, 3% 80%, 5% 30%, 8% 60%, 10% 20%, 13% 90%, 15% 40%, 18% 70%, 20% 10%, 23% 50%, 25% 80%, 28% 30%, 30% 60%, 33% 20%, 35% 90%, 38% 40%, 40% 70%, 43% 10%, 45% 50%, 48% 80%, 50% 30%, 53% 60%, 55% 20%, 58% 90%, 60% 40%, 63% 70%, 65% 10%, 68% 50%, 70% 80%, 73% 30%, 75% 60%, 78% 20%, 80% 90%, 83% 40%, 85% 70%, 88% 10%, 90% 50%, 93% 80%, 95% 30%, 98% 60%, 100% 20%)",
          }}
        />
      </div>
    </div>
  );
}
