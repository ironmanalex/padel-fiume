export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string;
  category: "news" | "tornei" | "eventi";
}

export interface Tournament {
  slug: string;
  title: string;
  date: string;
  image: string;
  description: string;
}
