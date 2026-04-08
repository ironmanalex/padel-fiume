export const SITE_NAME = "DICA Padel Center";
export const SITE_DESCRIPTION =
  "Il DICA PADEL CENTER di Fiume Veneto, Pordenone, offre 5 campi coperti, bar e club house. Un ambiente perfetto per gli appassionati di padel di ogni livello!";

export const CONTACT = {
  address: "Via Enrico da Fiume, 33",
  city: "33080 Fiume Veneto (Pordenone)",
  phone: "+39 351 407 1047",
  phoneDisplay: "+39 351 407 1047",
  email: "info@dicapadel.it",
  whatsapp: "https://wa.me/message/JOO5Q7RO4TUVJ1",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.5!2d12.7339!3d45.9267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477943f6e43c0001%3A0x0!2sDICA+Padel+Center!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit",
} as const;

export const HOURS = [
  { days: "Lunedì - Venerdì", hours: "09:00 - 23:30" },
  { days: "Sabato", hours: "09:00 - 16:00" },
  { days: "Domenica", hours: "10:00 - 12:30" },
] as const;

export const COMPANY = {
  name: "Nonsolopadel ssd",
  vat: "P.iva 04083150922",
  designBy: "ONOFF STUDIO SRL",
  year: 2026,
} as const;

export const GA_ID = "G-9DWQYFX8KR";

export const IUBENDA = {
  siteId: 3695082,
  cookiePolicyId: 99932426,
} as const;

export const SOCIAL = {
  instagram: "https://www.instagram.com/dicapadel/",
  facebook: "https://www.facebook.com/dicapadel",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Struttura", href: "/struttura" },
  { label: "Eventi", href: "/eventi" },
  { label: "Convenzioni", href: "/convenzioni" },
  { label: "News", href: "/news" },
  { label: "Squadre", href: "/squadre" },
  { label: "Tariffario", href: "/tariffario" },
  { label: "Contatti", href: "/contatti" },
] as const;

export const AMENITIES = [
  { label: "5 campi al coperto", icon: "court" },
  { label: "Area relax", icon: "relax" },
  { label: "Impianto riscaldato", icon: "heating" },
  { label: "Vetri 8+8", icon: "glass" },
  { label: "Bar", icon: "bar" },
] as const;

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwzgkla";
