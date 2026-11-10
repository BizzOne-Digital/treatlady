export const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const BUSINESS = {
  name: "TreatLady",
  owner: "Leticia",
  tagline: "Let us treat U",
  phones: ["559-681-9449", "559-777-9335"],
  email: "info@treatladyevents.com",
  hours: "Mon–Sat: 7:00 AM–5:00 PM",
  closed: "Closed Sunday",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
} as const;

export const tel = (p: string) => `tel:+1${p.replace(/\D/g, "")}`;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
] as const;

export const IMAGES = {
  heroMain: "/images/hero-main.png",
  heroSide: "/images/hero-cupcakes.png",
  heroSmall: "/images/hero-balloons.png",
  cakes: "/images/cakes.png",
  desserts: "/images/desserts.png",
  balloons: "/images/balloons.png",
  cta: "/images/dessert-table-wide.png",
  aboutHero: "/images/dessert-table-wide.png",
  servicesHero: "/images/services-hero.png",
  party: "/images/party.png",
  // Still stock - replace when available
  owner: "/images/home-about.png",
  story: u("1621303837174-89787a7d4729", 1200),
};

export type IconName =
  | "cake"
  | "gem"
  | "truck"
  | "calendar"
  | "clock"
  | "alert"
  | "gift"
  | "sparkles"
  | "flower"
  | "check"
  | "cupcake"
  | "balloon";

export const SERVICES = [
  {
    key: "cakes",
    icon: "cake" as IconName,
    title: "Custom Cakes",
    short: "Custom Cakes",
    price: 75,
    image: IMAGES.cakes,
    alt: "Elegant custom cake decorated with fresh flowers",
    description:
      "Every cake is designed around your celebration: your colors, your theme, your story. From a simple, elegant birthday cake to a multi-tier wedding centerpiece, each one is baked fresh and finished by hand. All of our cakes are covered in smooth, delicious buttercream (we do not use fondant).",
    includes: ["Birthday cakes", "Wedding cakes", "Celebration cakes", "Custom themes", "Personalized decoration", "Buttercream finish only"],
    notice: "Requires at least 3 days' notice.",
  },
  {
    key: "desserts",
    icon: "cupcake" as IconName,
    title: "Custom Dessert Tables",
    short: "Dessert Tables",
    price: 500,
    image: IMAGES.desserts,
    alt: "Styled dessert table with cupcakes and treats",
    description:
      "A fully styled dessert table that doubles as a showpiece. We coordinate the treats, stands, florals and décor so your guests remember how it looked as much as how it tasted.",
    includes: ["Cupcakes", "Cake pops", "Cookies", "Assorted desserts", "Styled table displays", "Floral & décor setup"],
    notice: "Book at least 2 weeks in advance.",
  },
  {
    key: "balloons",
    icon: "balloon" as IconName,
    title: "Balloon Decor",
    short: "Balloon Decor",
    price: 300,
    image: IMAGES.balloons,
    alt: "Blush and gold balloon installation",
    description:
      "Organic balloon arches, garlands and backdrops in palettes that match your event. We design, deliver and install so the space is ready when your guests arrive.",
    includes: ["Balloon arches", "Garlands", "Backdrops", "Party installations", "Event decor"],
    notice: "Book early for weekend dates.",
  },
];

export const FEATURES: { icon: IconName; title: string; text: string }[] = [
  { icon: "cake", title: "Custom Designs", text: "Tailored to Your Event" },
  { icon: "gem", title: "Beautiful Presentations", text: "Dessert Tables & Decor" },
  { icon: "truck", title: "Delivery Options", text: "Available for a Small Fee" },
];

export const POLICIES: { icon: IconName; title: string; text: string }[] = [
  { icon: "calendar", title: "Planning a Wedding or Large Event?", text: "Please book at least 2 weeks in advance." },
  { icon: "cake", title: "Custom Cakes", text: "Require at least 3 days' notice." },
  { icon: "truck", title: "Delivery Options", text: "Available for a small fee." },
  {
    icon: "clock",
    title: "Pickup Policy",
    text: "10-minute grace period. After 10 minutes, pickup will be at the earliest available time and may include a $10 fee.",
  },
];

export const PLANNING_INFO: { icon: IconName; title: string; text: string }[] = [
  { icon: "calendar", title: "Weddings & Dessert Tables", text: "Wedding cakes and dessert tables require at least 2 weeks' notice." },
  { icon: "cake", title: "Custom Cakes", text: "Custom cakes require at least 3 days' notice." },
  { icon: "sparkles", title: "Buttercream Only", text: "All cakes are covered in buttercream. We do not offer fondant-covered cakes." },
  { icon: "alert", title: "Short-Notice Orders", text: "Short-notice orders may be possible and may include an additional fee." },
  { icon: "truck", title: "Delivery", text: "Delivery is available for a small fee, based on your event location." },
  {
    icon: "clock",
    title: "Pickup Grace Period",
    text: "Pickups have a 10-minute grace period. After 10 minutes, pickup is rescheduled for the owner's earliest convenience and a $10 fee may apply.",
  },
  { icon: "gift", title: "Large Orders", text: "Contact us for large-order discounts." },
];

export const TESTIMONIALS = [
  { quote: "The cake was absolutely beautiful and tasted amazing! It was the highlight of our event.", name: "Maria S.", event: "Birthday" },
  { quote: "The dessert table was stunning! Everything was so well organized and delicious.", name: "Jessica R.", event: "Dessert Table Setup" },
  { quote: "The balloon decor was perfect and brought our whole theme to life. Highly recommend!", name: "Daniel M.", event: "Baby Shower" },
  { quote: "Leticia made our wedding cake exactly how we imagined it. Guests kept asking who made it, and every slice was gone by the end of the night.", name: "Andrea & Luis", event: "Wedding" },
  { quote: "On time, beautifully set up, and so easy to work with. The cake pops matched our colors perfectly.", name: "Priscilla G.", event: "Bridal Shower" },
  { quote: "We ordered a cake and balloon garland for our parents' anniversary. It looked elegant without being over the top.", name: "Karina V.", event: "Anniversary" },
  { quote: "Clear communication from the first message to delivery. The dessert table was the centerpiece of the room.", name: "Monica T.", event: "Corporate Celebration" },
  { quote: "My daughter's birthday cake was a work of art and tasted even better than it looked. We'll be back every year.", name: "Rosa L.", event: "Birthday" },
  { quote: "The balloon arch was full, lush and exactly in our blush and gold palette. Set up quickly and stayed perfect all day.", name: "Stephanie A.", event: "Baby Shower" },
];

export const DIFFERENTIATORS: { icon: IconName; title: string; text: string }[] = [
  { icon: "sparkles", title: "Personalized Designs", text: "Every order starts with your theme, colors and story, never a copy-paste design." },
  { icon: "gem", title: "Attention to Detail", text: "From piping to ribbon placement, the small finishing touches are where we shine." },
  { icon: "flower", title: "Beautiful Presentation", text: "Treats, stands, florals and balloons styled together as one cohesive look." },
  { icon: "check", title: "Reliable Service", text: "Clear timelines, honest communication and on-time delivery and setup." },
];

export const HOW_IT_WORKS = [
  { title: "Share Your Vision", text: "Send us your date, theme, colors and guest count through the quote form or a quick call." },
  { title: "Design & Quote", text: "We plan the details with you and send a clear, custom quote with no surprises." },
  { title: "We Create", text: "Your treats are baked fresh and your decor is prepared by hand for your event." },
  { title: "Celebrate", text: "Pick up your order or let us deliver and set up, then enjoy every sweet moment." },
];

export const PACKAGE_POINTS = [
  "Custom buttercream cake",
  "Styled dessert table",
  "Balloon arch or backdrop",
  "Coordinated colors & theme",
  "Delivery & setup available",
  "Large-order discounts",
];

export const FAQS = [
  {
    q: "How far in advance should I book?",
    a: "Custom cakes need at least 3 days' notice. Wedding cakes, dessert tables and large events should be booked at least 2 weeks in advance. Short-notice orders may be possible for an additional fee.",
  },
  {
    q: "Do you use fondant on your cakes?",
    a: "No. All of our cakes are covered in buttercream only, for a soft, delicious finish that tastes as good as it looks.",
  },
  {
    q: "Do you offer delivery?",
    a: "Yes, delivery is available for a small fee based on your event location. Balloon decor and dessert tables can also be set up on site.",
  },
  {
    q: "What is your pickup policy?",
    a: "Pickups have a 10-minute grace period. After 10 minutes, pickup will be rescheduled for the owner's earliest convenience and a $10 fee may apply.",
  },
  {
    q: "Can I combine services into one package?",
    a: "Absolutely. Many clients combine a cake, dessert table and balloon decor for one coordinated look. Contact us for large-order discounts.",
  },
];

export const EVENTS = [
  "Weddings",
  "Birthdays",
  "Baby Showers",
  "Bridal Showers",
  "Anniversaries",
  "Corporate Celebrations",
  "Special Events",
];

export const GALLERY = Array.from({ length: 22 }, (_, i) => ({
  src: `/gallery/client-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `TreatLady custom creation ${i + 1}`,
}));

export const SERVICE_OPTIONS = [
  "Custom Cake",
  "Dessert Table",
  "Balloon Decor",
  "Cake + Dessert Table",
  "Dessert Table + Balloons",
  "Full Event Package",
] as const;

export const EVENT_TYPES = ["Wedding", "Birthday", "Baby Shower", "Bridal Shower", "Anniversary", "Corporate", "Other"] as const;

export const BUDGETS = ["Under $150", "$150 - $500", "$500 - $1,000", "$1,000 - $2,500", "$2,500+"] as const;
