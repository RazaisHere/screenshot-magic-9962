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
      { title: "Goldcrest Views — High-rise apartments in Islamabad" },
      {
        name: "description",
        content:
          "Studio to 3-bedroom apartments at Goldcrest Views, a landmark high-rise address in Islamabad. Amenity floors, flexible payment plans and live construction updates.",
      },
      { property: "og:title", content: "Goldcrest Views — High-rise apartments in Islamabad" },
      {
        property: "og:description",
        content:
          "A landmark residential tower in Islamabad. Explore layouts, amenities, payment plans and construction progress.",
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
