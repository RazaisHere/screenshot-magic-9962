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
    title: "Seven 40-storey towers",
    body: "Dubai-inspired towers that redefine Islamabad’s skyline.",
  },
  {
    title: "Studios to duplexes",
    body: "Studios, 1–4 bedroom apartments with smart-home technology.",
  },
  {
    title: "World-class amenities",
    body: "A temperature-controlled pool, private security, parking and a podium deck.",
  },
  {
    title: "Three-year payment plans",
    body: "Flexible 3-year plans, with rental management for overseas investors.",
  },
];

export const AMENITIES = [
  {
    title: "Swimming Pool",
    body: "Temperature-controlled pool for exercise and relaxation.",
  },
  {
    title: "Private Security",
    body: "24/7 protection with trained staff and surveillance.",
  },
  {
    title: "Parking Space",
    body: "Dedicated on-site parking zones with direct building access.",
  },
  {
    title: "Podium Level",
    body: "Elevated deck for open-air lounging and social gatherings.",
  },
];

export const PAYMENT_STEPS = [
  {
    step: "01",
    title: "Three-year plan",
    body: "Flexible payments structured across three years.",
  },
  {
    step: "02",
    title: "Rental management",
    body: "Dedicated rental management for overseas investors.",
  },
  {
    step: "03",
    title: "High returns",
    body: "Luxury living paired with a residential investment.",
  },
];

export const GALLERY_CATEGORIES = ["All", "Exteriors", "Views", "Construction"] as const;

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
    body: "A clear record of the purchase, from allocation through to handover.",
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
  { title: "Sample apartment", body: "Review finishes and layouts with the sales team." },
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
      "Buying from abroad was straightforward. The team kept every document clear before we committed.",
    name: "Bilal K.",
    role: "Overseas investor",
  },
  {
    quote:
      "Being next to Giga Mall decided it for us. The three-year plan let us book without waiting for possession.",
    name: "Sara M.",
    role: "Family buyer",
  },
];

export const FAQS = [
  {
    q: "Where is Goldcrest Views located?",
    a: "Goldcrest Views is in the prime heart of Giga City, Islamabad, adjacent to Giga Mall, with connectivity along GT Road and the Islamabad Highway to the twin cities.",
  },
  {
    q: "What unit types are available?",
    a: "Studios, 1 to 4 bedroom apartments with smart-home technology in every home. The sales team confirms what is open for booking.",
  },
  {
    q: "Is a payment plan available?",
    a: "Yes. Flexible 3-year payment plans are available, along with dedicated rental management for overseas investors.",
  },
  {
    q: "How can I verify the project before booking?",
    a: "Request the approved building plan, the developer's registration and the project NOC, and confirm them with the relevant authority. We provide copies on request.",
  },
  {
    q: "Can overseas buyers purchase remotely?",
    a: "Yes. Overseas investors can purchase remotely, and dedicated rental management is available once the home is ready.",
  },
  {
    q: "When is possession expected?",
    a: "The project is in progress. Handover follows completion of construction, and the team shares the latest site position on request.",
  },
];
