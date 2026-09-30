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
    title: "Eight 40-storey towers",
    body: "Dubai-inspired towers that redefine Islamabad’s skyline.",
  },
  {
    title: "Studios to duplexes",
    body: "Studios, 1–4 bedroom apartments with smart-home technology.",
  },
  {
    title: "World-class amenities",
    body: "Temperature-controlled infinity pools, 24/7 AI-integrated security,covered parking and dedicated podium.",
  },
  {
    title: "Three-year payment plan",
    body: "Flexible 3-year plan, with dedicated Airbnb rental model for investors.",
  },
];

export const AMENITIES = [
  {
    title: "Infinity Pools",
    body: "Temperature-controlled infinity pools for exercise and relaxation.",
  },
  {
    title: "Private Security",
    body: "24/7 protection with trained staff and AI-integrated surveillance.",
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
    body: "Dedicated Airbnb rental model for investors.",
  },
  {
    step: "03",
    title: "High returns",
    body: "Luxury living paired with a residential investment.",
  },
];

export const GALLERY_CATEGORIES = ["All", "Exteriors", "Views", "Construction"] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export const EXPERIENCES = [
  { title: "Sales Office", body: "Walk through layouts, materials and floor plates in person." },
  {
    title: "Site visit",
    body: "See the structure as it rises and meet the construction team on-site.",
  },
  
  { title: "Model Apartment", body: "Review finishes and layouts with the sales team." },
];

export const TESTIMONIALS = [
  {
    quote:
      "Actress Ushna Shah shares her thoughts about Goldcrest Views Model Apartments in Giga Mall Islamabad",
    name: "Ushna Shah",
    role: "Actress",
    image: "/testimonials/ushna-shah.jpg",
    videoUrl:
      "https://goldcrestviews.com.pk/wp-content/uploads/2025/07/Actress-Ushna-Shah-at-Goldcrest-Views-Model-Apartments-in-Giga-Mall-Islamabad-Full-Video-Giga-Mall-720p-h264.mp4",
  },
  {
    quote:
      "Celebrity Chef Gulzar shares his experience at Goldcrest Views Model Apartments in Giga Mall Islamabad",
    name: "Chef Gulzar",
    role: "Celebrity Chef",
    image: "/testimonials/chef-gulzar.jpg",
    videoUrl:
      "https://goldcrestviews.com.pk/wp-content/uploads/2025/07/Chef-Gulzar-at-Goldcrest-Views-Islamabad-Model-Apartments-Giga-Mall-Islamabad-Giga-Mall-720p-h264.mp4",
  },
  {
    quote:
      "Renowned actor Faisal Qureshi visits Goldcrest Views Model Apartments in Giga Mall Islamabad",
    name: "Faisal Qureshi",
    role: "Actor & Host",
    image: "/testimonials/faisal-qureshi.jpg",
    videoUrl:
      "https://goldcrestviews.com.pk/wp-content/uploads/2025/07/Faysal-Quraishi-visit-to-Goldcrest-Views-Model-Apartments-in-Giga-Mall-Islamabad-Giga-Group-Giga-Mall-720p-h264.mp4",
  },
  {
    quote: "Actress Kubra Khan at Goldcrest Views Model Apartments in Giga Mall Islamabad",
    name: "Kubra Khan",
    role: "Actress & Model",
    image: "/testimonials/kubra-khan.jpg",
    videoUrl:
      "https://goldcrestviews.com.pk/wp-content/uploads/2025/07/Kubra-Khan-at-Goldcrest-Views-Islamabad-Model-Apartments-Giga-Mall-Islamabad-Giga-Mall-720p-h264.mp4",
  },
];

export const FAQS = [
  {
    q: "Where is Goldcrest Views located?",
    a: "Goldcrest Views is in the prime heart of Downtown Giga, Islamabad, adjacent to Giga Mall, with connectivity along Islamabad Express way and the Islamabad Highway to the twin cities.",
  },
  {
    q: "What unit types are available?",
    a: "Studios, 1 to 4 bedroom apartments with smart-home technology in every home. The sales team confirms what is open for booking.",
  },
  {
    q: "Is a payment plan available?",
    a: "Yes. Flexible 3-year payment plan is available, along with dedicated Airbnb rental management for overseas investors.",
  },
 
  {
    q: "Can overseas buyers purchase remotely?",
    a: "Yes. Overseas investors can purchase remotely, and dedicated Airbnb rental management is available once the home is ready.",
  },
  {
    q: "When is possession expected?",
    a: "The project is in progress. Handover follows completion of construction, and the team shares the latest site position on request.",
  },
];

export const DUBAI_TOWERS = [
  {
    title: "Goldcrest Views 1",
    image: "/dubai/goldcrest-views-1.jpg",
    body: "A 40-storey tower in JLT Cluster V with 376 homes, from studios to penthouses, and a rooftop pool near Dubai Marina and Palm Jumeirah.",
  },
  {
    title: "Goldcrest Views 2",
    image: "/dubai/goldcrest-views-2.jpg",
    body: "A 39-storey tower of freehold apartments and offices in Jumeirah Lakes Towers, with lakeside and island views. Delivered.",
  },
  {
    title: "Goldcrest Executive",
    image: "/dubai/goldcrest-executive.jpg",
    body: "A 40-storey mixed-use tower in JLT, with offices below and studios and one-bedroom homes above, plus a gym, pool, and 24/7 security.",
  },
];
