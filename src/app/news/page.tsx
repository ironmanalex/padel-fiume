import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsCard } from "@/components/news/NewsCard";
import { TournamentCard } from "@/components/news/TournamentCard";
import { newsArticles, tournaments } from "@/lib/news-data";

export const metadata: Metadata = createMetadata({
  title: "News",
  description:
    "Novità, eventi e tornei del DICA Padel Center di Fiume Veneto, Pordenone.",
});

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Tornei"
        subtitle="Resta aggiornato sulle ultime novità del DICA Padel Center"
        image="/images/hero/news.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="container-site">
          <SectionHeading
            title="Ultime notizie"
            subtitle="Eventi, attività e novità dal nostro centro"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-light">
        <div className="container-site">
          <SectionHeading
            title="Tornei"
            subtitle="I nostri tornei settimanali e competizioni FITP"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tournaments.map((tournament) => (
              <TournamentCard key={tournament.slug} tournament={tournament} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
