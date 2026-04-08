import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-6xl md:text-8xl font-bold font-heading text-primary mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold font-heading uppercase mb-4">
          Pagina non trovata
        </h2>
        <p className="text-gray-medium text-lg mb-8 max-w-md mx-auto">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Button href="/">Torna alla home</Button>
      </div>
    </div>
  );
}
