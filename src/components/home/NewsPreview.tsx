import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsCard } from "@/components/news/NewsCard";
import { Button } from "@/components/ui/Button";
import { newsArticles } from "@/lib/news-data";

export function NewsPreview() {
  const latest = newsArticles.slice(0, 3);

  return (
    <section className="py-16 md:py-24">
      <div className="container-site">
        <SectionHeading
          title="Ultime news"
          subtitle="Scopri le ultime novità dal DICA Padel Center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {latest.map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>
        <div className="text-center">
          <Button href="/news" variant="outline">
            Tutte le news
          </Button>
        </div>
      </div>
    </section>
  );
}
