import { HeroSection } from "@/components/home/HeroSection";
import { AmenitiesBar } from "@/components/home/AmenitiesBar";
import { PiancavalloPromo } from "@/components/home/PiancavalloPromo";
import { ServiceCards } from "@/components/home/ServiceCards";
import { EventOrganization } from "@/components/home/EventOrganization";
import { NewsPreview } from "@/components/home/NewsPreview";
import { HomeGallery } from "@/components/home/HomeGallery";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AmenitiesBar />
      <PiancavalloPromo />
      <ServiceCards />
      <EventOrganization />
      <NewsPreview />
      <HomeGallery />
    </>
  );
}
