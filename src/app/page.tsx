import { HeroSection } from "@/components/home/HeroSection";
import { PiancavalloPromo } from "@/components/home/PiancavalloPromo";
import { EventOrganization } from "@/components/home/EventOrganization";
import { NewsPreview } from "@/components/home/NewsPreview";
import { HomeGallery } from "@/components/home/HomeGallery";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PiancavalloPromo />
      <EventOrganization />
      <NewsPreview />
      <HomeGallery />
    </>
  );
}
