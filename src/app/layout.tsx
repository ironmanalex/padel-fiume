import type { Metadata } from "next";
import { Montserrat, Kanit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { GA_ID, IUBENDA, SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${montserrat.variable} ${kanit.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        {/* iubenda Cookie Consent */}
        <Script id="iubenda-config" strategy="afterInteractive">
          {`
            var _iub = _iub || [];
            _iub.csConfiguration = {
              "siteId": ${IUBENDA.siteId},
              "cookiePolicyId": ${IUBENDA.cookiePolicyId},
              "lang": "it"
            };
          `}
        </Script>
        <Script
          src="https://cs.iubenda.com/autoblocking/3695082.js"
          strategy="afterInteractive"
        />
        <Script
          src="//cdn.iubenda.com/cs/gpp/stub.js"
          strategy="afterInteractive"
        />
        <Script
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          strategy="afterInteractive"
          charSet="UTF-8"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
