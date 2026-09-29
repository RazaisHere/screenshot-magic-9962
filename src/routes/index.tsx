import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { InquiryModalProvider } from "@/components/site/InquiryModal";
import { Hero } from "@/components/site/Hero";
import { Gallery } from "@/components/site/Gallery";
import {
  Highlights,
  Location,
  Inspiration,
  Amenities,
  Investment,
  ConstructionProgress,
  Verification,
  Developer,
  Experiences,
  Testimonials,
  Faq,
  ClosingCta,
  SiteFooter,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goldcrest Views — Luxury residences in Giga City" },
      {
        name: "description",
        content:
          "Seven 40-storey towers by Al-Ghurair Giga in Giga City, Islamabad. Studios to 4-bedroom apartments,  with 3-year payment plans.",
      },
      { property: "og:title", content: "Goldcrest Views — Luxury residences in Giga City" },
      {
        property: "og:description",
        content:
          "A luxury residential complex beside Giga Mall. Studios, apartments with smart-home technology",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <InquiryModalProvider>
      <div className="min-h-screen bg-background">
        <SiteNav />
        <main>
          <Hero />
          <Highlights />
          <Location />
          <Inspiration />
          <Amenities />
          <Investment />
          <ConstructionProgress />
          <Gallery />
          <Verification />
          <Developer />
          <Experiences />
          <Testimonials />
          <Faq />
          <ClosingCta />
        </main>
        <SiteFooter />
      </div>
    </InquiryModalProvider>
  );
}
