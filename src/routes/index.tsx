import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Sprout, TreePine, Flower2, MapPin, Star } from "lucide-react";
import heroImg from "@/assets/home_image2.jpeg";
import landscapeImg from "@/assets/home_image1.jpeg";
import careImg from "@/assets/plant-care.jpg";
import { CATEGORIES, SERVICES, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Story />
      <Categories />
      <Services />
      <CareStrip />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x pt-8 md:pt-16 pb-20 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-6 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow"
          >
            Ravet, Pune · A Trusted Local Nursery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-6 font-display text-[3.4rem] sm:text-6xl lg:text-[5.2rem] leading-[0.98] tracking-tight text-foreground"
          >
            A living nursery,
            <br />
            <span className="italic text-leaf">rooted in care.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-7 max-w-lg text-lg text-muted-foreground leading-relaxed"
          >
            At Shrushti Ropvatika, we offer a carefully selected collection of healthy plants,
            gardening essentials, organic fertilizers, decorative pots and landscaping
            services. Whether you're starting a balcony garden or transforming a large
            outdoor space, we're here to help every step of the way.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              to="/plants"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Explore our plants
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm text-foreground hover:bg-muted transition-colors"
            >
              <MapPin className="h-4 w-4" />
              Plan a visit
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { n: "500+", l: "Plant varieties" },
              { n: "10000+", l: "Happy Customers" },
              { n: "19+", l: "Years of Experience" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-foreground">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.3, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-soft"
          >
            <img
              src={heroImg}
              alt="Sunlit rows of potted plants inside Shrushti Ropvatika nursery"
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass absolute -left-4 md:-left-10 bottom-8 rounded-2xl p-5 pr-7 max-w-[16rem]"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-leaf/15 text-leaf">
                <Leaf className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Hand-picked
                </div>
                <div className="font-display text-lg text-foreground leading-tight">
                  Every plant, personally.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Landscape Design", "Garden Setup", "Maintenance", "Consultation", "Bonsai", "Rare Plants", "Herbs & Edibles"];
  return (
    <div className="border-y border-border/60 bg-secondary/50 overflow-hidden">
      <div className="flex gap-14 py-6 animate-[marquee_35s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-14 text-sm uppercase tracking-[0.32em] text-muted-foreground">
            <span>{t}</span>
            <span className="text-leaf">✦</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-33.33%);} }`}</style>
    </div>
  );
}

function Story() {
  return (
    <section className="container-x py-28 grid lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-5">
        <p className="eyebrow">Our story</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-foreground">
          Grown slowly.<br />Chosen carefully.
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Shrushti Ropvatika was founded with a simple dream—to make gardening easy,
          enjoyable and accessible for everyone. Over the years, our nursery has grown
          into a trusted destination for plant lovers, offering everything from ornamental
          plants and fruit saplings to organic manures, gardening tools and decorative pots.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Along with healthy plants, we also help our customers create beautiful green
          spaces through landscape design, garden setup, artificial lawns, wall gardens,
          vegetable gardens and expert gardening advice. Every visitor receives
          personal guidance to choose the right plants for their space.
        </p>
        <Link
          to="/about"
          className="mt-8 inline-flex items-center gap-2 text-sm text-leaf hover:gap-3 transition-all"
        >
          Read our story <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="lg:col-span-7 grid grid-cols-2 gap-5">
        <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-card mt-10">
          <img src={careImg} alt="Repotting a plant" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-card">
          <img src={landscapeImg} alt="Landscaped garden" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="container-x py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <p className="eyebrow">Plant collections</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-foreground">
            A garden for every corner.
          </h2>
        </div>
        <Link
          to="/plants"
          className="inline-flex items-center gap-2 text-sm text-leaf"
        >
          See all plants <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-3xl bg-card shadow-card"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                width={1000}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
              <h3 className="font-display text-2xl">{cat.name}</h3>
              <p className="mt-2 text-sm text-primary-foreground/80 line-clamp-2">
                {cat.blurb}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const icons = { sprout: Sprout, shovel: TreePine, leaf: Leaf, book: Flower2 } as const;
  return (
    <section className="bg-secondary/60 py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-foreground">
            Beyond the nursery gate.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Beautiful gardens don't happen by accident. Our team designs, builds
            and cares for them across homes, farmhouses and boutique spaces.
          </p>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons] ?? Leaf;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-3xl bg-card p-8 border border-border/60 hover:shadow-card transition-all"
              >
                <div className="flex items-start gap-5">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-leaf/10 text-leaf shrink-0">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <Link
          to="/services"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground"
        >
          Explore services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function CareStrip() {
  return (
    <section className="container-x py-28 grid lg:grid-cols-2 gap-14 items-center">
      <div className="order-2 lg:order-1 aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-card">
        <img src={careImg} alt="Plant care" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="order-1 lg:order-2">
        <p className="eyebrow">Plant care journal</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl text-foreground leading-tight">
          Advice, not algorithms.
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
          Bring us a leaf, a photograph or a question. Our horticulturists
          spend as much time teaching as they do tending. It's the most
          rewarding part of what we do.
        </p>
        <Link
          to="/plant-care"
          className="mt-8 inline-flex items-center gap-2 text-sm text-leaf"
        >
          Read our care guides <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "Impressed with variety and quality of plants. They do have great number of indoor and outdoor plants with reasonable rates. Recommended and great choice near Ravet Kiwale area.",
      name: "Sarika Bhor",
      role: "Homeowner, Ravet, Pune",
    },
    {
      quote:
        "They have a lot of varieties and the place is big. Lot of plants: indoor-outdoor, plastic pots, metal stands, seeds fertilizers and everything.They do have plants for societies as well.",
      name: "Abhijeet Kamble",
      role: "Local Guide",
    },
    {
      quote:
        "A great nursery, the staff is very accommodating and caters to one's needs and choices. They have a wide variety of plants and pots to choose from.Extremely well maintained place",
      name: "Anushka Tayal",
      role: "Plant enthusiast",
    },
  ];
  return (
    <section className="container-x py-24">
      <p className="eyebrow">Kind words</p>
      <h2 className="mt-3 font-display text-4xl md:text-5xl text-foreground max-w-3xl">
        From gardens we've helped raise.
      </h2>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-3xl border border-border/60 bg-card p-8"
          >
            <div className="flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-5 font-display text-xl leading-snug text-foreground">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <div className="text-foreground">{t.name}</div>
              <div className="text-muted-foreground">{t.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-x py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground p-10 md:p-16">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs tracking-[0.28em] uppercase text-primary-foreground/60">
              Come visit
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              The nursery is happiest in the morning.
            </h2>
            <p className="mt-5 text-primary-foreground/80 max-w-md">
              Walk the aisles, ask our team anything, and pick a plant that
              feels right. No appointment needed.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground text-primary px-7 py-3.5 text-sm"
            >
              <MapPin className="h-4 w-4" /> Get directions
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
