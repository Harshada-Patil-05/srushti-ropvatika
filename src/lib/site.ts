import indoor from "@/assets/cat-indoor.jpg";
import outdoor from "@/assets/cat-outdoor.jpg";
import edible from "@/assets/cat-edible.jpg";
import bonsai from "@/assets/cat-bonsai.jpg";

export const SITE = {
  name: "Shrushti Ropvatika",
  tagline: "A living nursery, rooted in care.",
  phone: "+91 98902 00992",
  phoneRaw: "+91 98902 00992",
  email: "shrushtifarms@gmail.com",
  address: "shrushti farms, Plot No. 206/3, Ravet Village Rd, Sector 29, Shinde Vasti, Ravet, Pimpri-Chinchwad, Maharashtra 412101",
  hours: "Mon–Sun · 9:30 AM – 7:00 PM ",
  mapsUrl:
      "https://www.google.com/maps/place/Shrushti+Rop+Vatika/@18.643772,73.7523879,18.38z/data=!4m6!3m5!1s0x3bc2b9f6f21fb5df:0x4f0389357a264496!8m2!3d18.6434494!4d73.7526414!16s%2Fg%2F11cp09znrk?entry=ttu&g_ep=EgoyMDI2MDcwNy4wIKXMDSoASAFQAw%3D%3D",
  whatsapp: (msg: string) =>
    `https://wa.me/919890200992?text=${encodeURIComponent(msg)}`,
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/plants", label: "Plants" },
  { to: "/services", label: "Services" },
  { to: "/plant-care", label: "Plant Care" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export const CATEGORIES = [
  {
    slug: "indoor",
    name: "Indoor Plants",
    image: indoor,
    blurb:
      "Air-purifying foliage, low-light companions and sculptural statement pieces for calm interiors.",
    examples: ["Monstera Deliciosa", "Snake Plant", "Peace Lily", "ZZ Plant", "Fiddle Leaf Fig"],
  },
  {
    slug: "outdoor",
    name: "Outdoor & Flowering",
    image: outdoor,
    blurb:
      "Sun-loving bloomers and hardy shrubs curated for balconies, terraces and Indian gardens.",
    examples: ["Hibiscus", "Bougainvillea", "Jasmine", "Adenium", "Ixora"],
  },
  {
    slug: "edible",
    name: "Herbs & Edibles",
    image: edible,
    blurb:
      "Kitchen-garden ready saplings — herbs, vegetables and fruiting plants raised organically.",
    examples: ["Tulsi", "Curry Leaf", "Mint", "Chilli", "Cherry Tomato"],
  },
  {
    slug: "bonsai",
    name: "Bonsai & Rare",
    image: bonsai,
    blurb:
      "Hand-shaped bonsai, imported succulents and collector varieties tended in our shade house.",
    examples: ["Ficus Bonsai", "Juniper Bonsai", "Adenium Grafts", "Variegated Monstera"],
  },
] as const;

export const SERVICES = [
  {
    title: "Premium Quality Plants",
    icon: "sprout",
    description:
      "Discover a wide collection of healthy indoor plants, outdoor plants, flowering plants, fruit plants, medicinal plants, bonsai, succulents and seasonal varieties carefully nurtured for long-lasting growth.",
    points: [
      "Indoor & Outdoor Plants",
      "Flowering & Fruit Plants",
      "Healthy, Well-Maintained Stock"
    ],
  },

  {
    title: "Organic Fertilizers & Plant Care",
    icon: "leaf",
    description:
      "We provide premium fertilizers, organic manures, potting mixtures, pesticides and plant care essentials to help your plants grow healthier and stronger throughout the year.",
    points: [
      "Organic Manures",
      "Premium Fertilizers",
      "Plant Care Products"
    ],
  },

  {
    title: "Designer Pots & Decorative Stands",
    icon: "book",
    description:
      "Enhance the beauty of your home or garden with our stylish collection of ceramic pots, decorative planters, hanging pots, metal stands and modern plant accessories.",
    points: [
      "Decorative Pots",
      "Plant Stands",
      "Garden Accessories"
    ],
  },

  {
    title: "Landscape & Garden Development",
    icon: "shovel",
    description:
      "From home gardens to commercial landscapes, our experienced team designs and develops beautiful green spaces tailored to your requirements.",
    points: [
      "Garden Planning",
      "Landscape Design",
      "Garden Development"
    ],
  },

  {
    title: "Green Gifting Solutions",
    icon: "flower",
    description:
      "Celebrate every occasion with eco-friendly plant gifts. We offer beautifully arranged plants, decorative pots and customized gifting solutions for birthdays, weddings, corporate events and festivals.",
    points: [
      "Corporate Gifts",
      "Festival Gifts",
      "Customized Plant Hampers"
    ],
  },

  {
    title: "Expert Gardening Guidance",
    icon: "leaf",
    description:
      "Whether you're a beginner or an experienced gardener, our team is always ready to help you choose the right plants and provide expert care tips for healthy growth.",
    points: [
      "Plant Selection",
      "Care Guidance",
      "Maintenance Advice"
    ],
  },
] as const;

export const CARE_TIPS = [
  {
    title: "Water with intention",
    body:
      "Most indoor plants prefer the top inch of soil to dry before the next drink. Overwatering is the leading cause of plant loss in Indian homes.",
  },
  {
    title: "Light is a nutrient",
    body:
      "Rotate pots every 10 days so growth stays even. East-facing windows are gold for most tropical foliage.",
  },
  {
    title: "Feed gently, monthly",
    body:
      "A diluted organic feed once a month between March and October keeps foliage rich without shocking the roots.",
  },
  {
    title: "Repot on the plant's clock",
    body:
      "Repot when roots circle the base or emerge from drainage holes — typically every 12 to 18 months.",
  },
  {
    title: "Wipe the leaves",
    body:
      "Dust blocks photosynthesis. A soft damp cloth once a fortnight keeps leaves glossy and pests at bay.",
  },
  {
    title: "Quarantine new arrivals",
    body:
      "Keep new plants separate for a week to observe for pests before introducing them to your collection.",
  },
] as const;

export const FAQS = [
  {
    q: "Do you offer home delivery or online shopping?",
    a: "Yes! We offer both online shopping and home delivery. You can browse our collection, place your order, and we'll carefully deliver healthy, quality plants right to your doorstep.",
  },
  {
    q: "Where is the nursery located?",
    a: "Our nursery is located at Shrushti Farms, Plot No. 206/3, Ravet Village Road, Sector 29, Shinde Vasti, Ravet, Pimpri-Chinchwad, Maharashtra 412101. We look forward to welcoming you—use the Google Maps link on our Contact page for easy navigation."
  },
  {
    q: "Do you help with landscaping and garden setup?",
    a: "Yes. We design and execute gardens of all sizes — from balcony makeovers to full landscape projects. Book a consultation and our team will visit your site.",
  },
  {
    q: "Can I get advice on caring for plants I already own?",
    a: "Absolutely. Send us a photo on WhatsApp or bring the plant in during nursery hours and our horticulturists will help diagnose and prescribe care.",
  },
  {
    q: "Do you provide plants for events or offices?",
    a: "We do curated plant setups for offices, cafes and events. Reach out with your brief and we'll share a proposal.",
  },
  {
    q: "What are your visiting hours?",
    a: "Monday to Sunday, 9:30 AM to 7:00 PM. We recommend mornings for the calmest experience.",
  },
] as const;
