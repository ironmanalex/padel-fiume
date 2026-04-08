import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/types/news";

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-primary text-dark text-xs font-heading font-bold uppercase px-3 py-1 rounded-full">
          {article.category}
        </span>
      </div>
      <div className="p-5">
        <time className="text-sm text-gray-medium">{article.date}</time>
        <h3 className="font-heading font-bold text-lg mt-1 mb-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-medium text-sm line-clamp-2">
          {article.excerpt}
        </p>
      </div>
    </Link>
  );
}
