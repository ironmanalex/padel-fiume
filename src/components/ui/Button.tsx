import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "white";
  showArrow?: boolean;
  external?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  showArrow = true,
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-semibold text-sm uppercase tracking-wider transition-all duration-300";

  const variants = {
    primary: "bg-primary text-dark hover:bg-primary-dark",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-dark",
    white: "bg-white text-dark hover:bg-gray-100",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {showArrow && <ArrowIcon />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {showArrow && <ArrowIcon />}
    </Link>
  );
}
