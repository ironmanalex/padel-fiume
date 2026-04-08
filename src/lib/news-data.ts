import { NewsArticle, Tournament } from "@/types/news";

export const newsArticles: NewsArticle[] = [
  {
    slug: "team-building-als-italia",
    title: "Una giornata di Team Building al DICA Padel con ALS Italia",
    excerpt:
      "Il Dica Padel Center si conferma il luogo ideale per organizzare giornate di team building. Recentemente ALS Italia ci ha scelto per vivere una giornata dedicata al lavoro di squadra.",
    date: "2025-06-15",
    image: "/images/news/team-building-als.jpg",
    content:
      "Il Dica Padel Center si conferma il luogo ideale per organizzare giornate di team building. Recentemente ALS Italia ci ha scelto per vivere una giornata dedicata al lavoro di squadra, combinando sport e collaborazione in un ambiente unico e stimolante.",
    category: "eventi",
  },
  {
    slug: "compleanni-al-dica-padel",
    title: "Compleanni al DICA Padel: Festeggia in modo unico!",
    excerpt:
      "Vogliamo che il tuo compleanno sia qualcosa di memorabile, offriamo la possibilità di organizzare compleanni unici nel nostro centro.",
    date: "2025-05-20",
    image: "/images/news/compleanni.jpg",
    content:
      "Vogliamo che il tuo compleanno sia qualcosa di memorabile. Offriamo la possibilità di organizzare compleanni unici nel nostro centro, con tornei amichevoli, musica e un ambiente festoso nella nostra Sala Piancavallo.",
    category: "eventi",
  },
  {
    slug: "location-eventi-pordenone",
    title:
      "La Location per Eventi a Pordenone: Scopri il DICA Padel",
    excerpt:
      "Stai cercando la location per eventi a Pordenone che sia moderna, versatile e in grado di stupire i tuoi ospiti?",
    date: "2025-04-10",
    image: "/images/news/location-eventi.jpg",
    content:
      "Stai cercando la location per eventi a Pordenone che sia moderna, versatile e in grado di stupire i tuoi ospiti? Il DICA Padel Center offre spazi unici per eventi aziendali, feste private e celebrazioni speciali.",
    category: "eventi",
  },
  {
    slug: "team-building-pordenone",
    title:
      "Team Building a Pordenone: Scopri le migliori attività al DICA Padel",
    excerpt:
      "Scopri le migliori attività di team building a Pordenone presso il Dica Padel Center.",
    date: "2025-03-25",
    image: "/images/news/team-building.jpg",
    content:
      "Scopri le migliori attività di team building a Pordenone presso il Dica Padel Center. Offriamo esperienze personalizzate che combinano sport, divertimento e collaborazione per rafforzare lo spirito di squadra della tua azienda.",
    category: "eventi",
  },
  {
    slug: "inaugurazione-dica-padel",
    title: "Inaugurazione del DICA Padel Center",
    excerpt:
      "Partecipa all'inaugurazione del DICA Padel Center a Fiume Veneto il 29 agosto.",
    date: "2024-08-29",
    image: "/images/news/inaugurazione.jpg",
    content:
      "Partecipa all'inaugurazione del DICA Padel Center a Fiume Veneto il 29 agosto. Un evento imperdibile per scoprire la nostra struttura, i 5 campi coperti e tutte le nostre comodità.",
    category: "news",
  },
  {
    slug: "apertura-nuovo-centro",
    title: "Nuovo Centro Padel a Fiume Veneto: Apertura il 20 luglio",
    excerpt:
      "Scopri il nuovo Dica Padel Center a Fiume Veneto, Pordenone. Apertura il 20 luglio.",
    date: "2024-07-20",
    image: "/images/news/apertura.jpg",
    content:
      "Scopri il nuovo Dica Padel Center a Fiume Veneto, Pordenone. Apertura il 20 luglio con 5 campi coperti, bar, sala eventi e tutte le comodità per gli appassionati di padel.",
    category: "news",
  },
];

export const tournaments: Tournament[] = [
  {
    slug: "dica-padel-open-luglio-2025",
    title: "DICA Padel Open Luglio 2025",
    date: "4-6 Luglio 2025",
    image: "/images/news/open-luglio.jpg",
    description:
      "Dal 4 al 6 luglio 2025, il DICA Padel Center di Fiume Veneto è stato teatro di un entusiasmante torneo Open Maschile FITP con montepremi di €1.400.",
  },
  {
    slug: "dica-padel-open-2025",
    title: "DICA Padel Open 2025",
    date: "27 Febbraio - 2 Marzo 2025",
    image: "/images/news/open-2025.jpg",
    description:
      "Dal 27 febbraio al 2 marzo, il DICA Padel Center di Fiume Veneto ha ospitato con orgoglio il suo primo torneo Open FITP con montepremi di €2.500.",
  },
  {
    slug: "clinic-marcelo-fassio",
    title: "Clinic con Marcelo Fassio",
    date: "27 Febbraio - 2 Marzo 2025",
    image: "/images/news/clinic-fassio.jpg",
    description:
      "Dal 27 febbraio al 2 marzo 2025, il DICA Padel Center ha avuto l'onore di ospitare un evento speciale: un clinic intensivo con Marcelo Fassio.",
  },
  {
    slug: "juevespool",
    title: "JuevesPool - Torneo settimanale",
    date: "Ogni giovedì dal 6 Febbraio 2025",
    image: "/images/news/juevespool.jpg",
    description:
      "A partire da giovedì 6 febbraio, al DICA Padel Center arriva il JuevesPool, il torneo settimanale di livello 2.5.",
  },
  {
    slug: "miercolespool",
    title: "MiercolesPool - Torneo settimanale",
    date: "Ogni mercoledì dal 26 Febbraio 2025",
    image: "/images/news/miercolespool.jpg",
    description:
      "Da mercoledì 26 febbraio, al DICA Padel Center il padel prende il ritmo del mercoledì con il MiercolesPool.",
  },
  {
    slug: "martespool",
    title: "MartesPool - Torneo settimanale",
    date: "Ogni martedì",
    image: "/images/news/martespool.jpg",
    description:
      "Il martedì al DICA Padel Center ha un solo nome: MartesPool. Il torneo settimanale competitivo per gli appassionati.",
  },
];

export function getNewsArticle(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}

export function getTournament(slug: string): Tournament | undefined {
  return tournaments.find((t) => t.slug === slug);
}

export function getAllSlugs(): string[] {
  return [
    ...newsArticles.map((a) => a.slug),
    ...tournaments.map((t) => t.slug),
  ];
}
