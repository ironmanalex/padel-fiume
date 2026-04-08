import Image from "next/image";
import Link from "next/link";
import { Tournament } from "@/types/news";

export function TournamentCard({ tournament }: { tournament: Tournament }) {
  return (
    <Link
      href={`/news/${tournament.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48">
        <Image
          src={tournament.image}
          alt={tournament.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-dark text-white text-xs font-heading font-bold uppercase px-3 py-1 rounded-full">
          Torneo
        </span>
      </div>
      <div className="p-5">
        <time className="text-sm text-primary font-semibold">
          {tournament.date}
        </time>
        <h3 className="font-heading font-bold text-lg mt-1 mb-2 group-hover:text-primary transition-colors">
          {tournament.title}
        </h3>
        <p className="text-gray-medium text-sm line-clamp-2">
          {tournament.description}
        </p>
      </div>
    </Link>
  );
}
