import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MessageCircle, MapPin } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { CATEGORIES, SITE } from "@/lib/site";

export const Route = createFileRoute("/plants")({
  head: () => ({
    meta: [
      { title: "Plants — Shrushti Ropvatika Nursery" },
      { name: "description", content: "Explore indoor plants, outdoor and flowering varieties, herbs, edibles, bonsai and rare collector plants at Shrushti Ropvatika." },
      { property: "og:title", content: "Our Plants — Shrushti Ropvatika" },
      { property: "og:description", content: "Indoor, outdoor, edibles, bonsai and rare plants — all raised at our nursery in Ravet, Pune." },
    ],
  }),
  component: Plants,
});

function Plants() {
  return (
    <>
      <PageHeader
        eyebrow="Our plants"
        title={<>Six hundred varieties, <em className="italic text-leaf font-normal">one honest promise</em>.</>}
        description="We raise plants suited to Indian homes and climates. You'll see the whole collection in person — this page is a starting point."
      />

      <section className="container-x pb-24 space-y-24">
        {CATEGORIES.map((cat, i) => (
          <motion.article
            key={cat.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="lg:col-span-6">
              <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-card">
                <img src={cat.image} alt={cat.name} width={1000} height={1200} loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-6">
              <p className="eyebrow">0{i + 1} · Collection</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-foreground leading-tight">{cat.name}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">{cat.blurb}</p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {cat.examples.map((e) => (
                  <span key={e} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
                    {e}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={SITE.whatsapp(`Hi Shrushti, I'd like to know what's available in ${cat.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground"
                >
                  <MessageCircle className="h-4 w-4" /> Ask about availability
                </a>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm"
                >
                  <MapPin className="h-4 w-4" /> Visit the nursery
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="container-x pb-24">
        <div className="rounded-[2.5rem] bg-secondary/60 p-10 md:p-14 text-center">
          <p className="eyebrow">A gentle note</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl max-w-2xl mx-auto text-foreground">
            We do sell online or deliver plants.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Choosing a plant is a small, personal moment. We'd love to be part
            of it — do drop by the nursery, or WhatsApp us to check what's
            currently in stock.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link to="/contact" className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm">Plan your visit</Link>
            <a href={SITE.whatsapp("Hi Shrushti, I'd like to check what's currently in stock.")} target="_blank" rel="noreferrer" className="rounded-full border border-border px-6 py-3 text-sm">Message on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
