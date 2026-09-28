export const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Location", href: "#location" },
  { label: "Amenities", href: "#amenities" },
  { label: "Payment", href: "#investment" },
  { label: "Progress", href: "#progress" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
];

export const HIGHLIGHTS = [
  {
    title: "A high-rise address",
    body: "Apartment living raised above the street, with long views in every direction.",
  },
  {
    title: "Studio to 3-bedroom",
    body: "A range of layouts for singles, couples and growing families.",
  },
  {
    title: "Amenity-led community",
    body: "Shared spaces designed for daily use, not just for the brochure.",
  },
  {
    title: "Structured payment plans",
    body: "Flexible instalment routes across the construction timeline.",
  },
];

export const AMENITIES = [
  {
    title: "Rooftop infinity-edge pool",
    body: "A swimming deck set against the open sky, reserved for residents.",
  },
  { title: "Residents' fitness floor", body: "Cardio, strength and stretch zones with daylight." },
  {
    title: "Central lobby and concierge",
    body: "A staffed arrival point handling guests, deliveries and requests.",
  },
  {
    title: "Community and event lounge",
    body: "A bookable indoor space for gatherings and celebrations.",
  },
  {
    title: "Children's play and family zones",
    body: "Safe, supervised-friendly areas for younger residents.",
  },
  {
    title: "Co-working and study rooms",
    body: "Quiet desks and meeting corners a lift ride from home.",
  },
  { title: "Covered parking", body: "Sheltered resident and visitor parking within the building." },
  {
    title: "Retail and dining at ground level",
    body: "Everyday convenience on the podium floors.",
  },
  {
    title: "Backup power and water systems",
    body: "Continuity infrastructure for uninterrupted living.",
  },
];

export const PAYMENT_STEPS = [
  {
    step: "01",
    title: "Booking",
    body: "Reserve your unit and confirm the layout, floor and orientation you want.",
  },
  {
    step: "02",
    title: "Down payment",
    body: "Complete the initial payment and receive your allocation documents.",
  },
  {
    step: "03",
    title: "Instalments",
    body: "Pay in scheduled instalments across the construction period.",
  },
  {
    step: "04",
    title: "Possession",
    body: "Settle the final balance and take handover of your apartment.",
  },
];

export const PROGRESS_ITEMS = [
  { label: "Excavation and foundations", value: 100 },
  { label: "Structure and grey work", value: 62 },
  { label: "Facade and glazing", value: 28 },
  { label: "MEP and fit-out", value: 12 },
];

export const GALLERY_CATEGORIES = [
  "All",
  "Exteriors",
  "Interiors",
  "Amenities",
  "Views",
  "Construction",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export const VERIFICATION_POINTS = [
  "Ask for the approved building plan and confirm it against the regulator's record.",
  "Verify the developer's registration and project NOC before any payment.",
  "Request a written payment schedule with named milestones and dates.",
  "Pay only into the project's official account and keep stamped receipts.",
  "Read the allocation and sale agreement in full, including handover terms.",
];

export const DEVELOPER_PILLARS = [
  {
    title: "Cross-border experience",
    body: "A team that has delivered residential and mixed-use projects across two markets.",
  },
  {
    title: "Design-led practice",
    body: "Architecture, interiors and landscape coordinated from a single brief.",
  },
  {
    title: "Construction discipline",
    body: "Independent supervision and staged quality checks through every phase.",
  },
  {
    title: "Client-side transparency",
    body: "Documented milestones, payment records and open progress reporting.",
  },
];

export const EXPERIENCES = [
  { title: "Sales lounge", body: "Walk through layouts, materials and floor plates in person." },
  {
    title: "Site visit",
    body: "See the structure as it rises and meet the construction team on-site.",
  },
  {
    title: "Virtual tour",
    body: "Review the project remotely with a guided call for overseas buyers.",
  },
  { title: "Sample apartment", body: "Experience finishes and spatial proportions at full scale." },
];

export const TESTIMONIALS = [
  {
    quote:
      "The team answered every question about documentation before we paid anything. That is what convinced us.",
    name: "Ayesha R.",
    role: "Apartment buyer",
  },
  {
    quote:
      "Buying from abroad was straightforward. Progress updates arrived on schedule and matched what we saw on site.",
    name: "Bilal K.",
    role: "Overseas investor",
  },
  {
    quote:
      "We compared several towers in the area. The layouts here simply used the space better for a family.",
    name: "Hina S.",
    role: "Resident family",
  },
];

export const FAQS = [
  {
    q: "Where is Goldcrest Views located?",
    a: "The tower sits within Islamabad's growing high-rise corridor, positioned for access to the city's main arteries and everyday amenities. Our team will share the exact plot details and a site map on request.",
  },
  {
    q: "What unit types are available?",
    a: "Layouts range from studios through to three-bedroom apartments. Availability varies by floor and orientation, so the sales team can confirm what is currently open for booking.",
  },
  {
    q: "Is a payment plan available?",
    a: "Yes. Booking, down payment, scheduled instalments and a final balance at possession. The exact schedule is issued in writing before you commit.",
  },
  {
    q: "How can I verify the project before booking?",
    a: "Request the approved building plan, the developer's registration and the project NOC, and confirm them with the relevant authority. We provide copies on request.",
  },
  {
    q: "Can overseas buyers purchase remotely?",
    a: "Yes. Virtual tours, digital documentation and scheduled progress reporting are available so you can complete the process from abroad.",
  },
  {
    q: "When is possession expected?",
    a: "Handover follows completion of the construction programme. Current stage-by-stage progress is published in the construction section of this page.",
  },
];
