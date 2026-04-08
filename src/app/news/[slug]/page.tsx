import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import {
  newsArticles,
  tournaments,
  getNewsArticle,
  getTournament,
  getAllSlugs,
} from "@/lib/news-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  const tournament = getTournament(slug);
  const item = article || tournament;

  if (!item) return createMetadata({ title: "Articolo non trovato" });

  return createMetadata({
    title: item.title,
    description:
      "content" in item ? item.content.slice(0, 160) : item.description.slice(0, 160),
  });
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  const tournament = getTournament(slug);

  if (!article && !tournament) {
    notFound();
  }

  const item = article || tournament!;
  const content = article ? article.content : tournament!.description;
  const image = article ? article.image : tournament!.image;
  const date = article ? article.date : tournament!.date;

  return (
    <article className="py-16 md:py-24">
      <div className="container-site max-w-3xl">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-8 hover:underline"
        >
          &larr; Torna alle news
        </Link>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading uppercase mb-4">
          {item.title}
        </h1>

        <time className="text-gray-medium">{date}</time>

        <div className="relative aspect-video rounded-2xl overflow-hidden mt-8 mb-8">
          <Image
            src={image}
            alt={item.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-medium leading-relaxed text-lg">{content}</p>
        </div>
      </div>
    </article>
  );
}
