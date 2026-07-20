import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Droplets, Sun, Sprout, Scissors, ThermometerSun, Bug } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { CARE_TIPS, SITE } from "@/lib/site";
import careImg from "@/assets/plant-care.jpg";

export const Route = createFileRoute("/plant-care")({
  head: () => ({
    meta: [
      { title: "Plant Care Guides — Shrushti Ropvatika" },
      { name: "description", content: "Simple, honest plant care advice from the horticulturists at Shrushti Ropvatika. Watering, light, feeding, repotting and more." },
      { property: "og:title", content: "Plant Care — Shrushti Ropvatika" },
      { property: "og:description", content: "Straightforward plant care guides for Indian homes." },
    ],
  }),
  component: PlantCare,
});

const icons = [Droplets, Sun, Sprout, Scissors, ThermometerSun, Bug];

function PlantCare() {
  return (
    <>
      <PageHeader
        eyebrow="Plant care"
        title={<>The small things <em className="italic text-leaf font-normal">that keep them alive</em>.</>}
        description="A quiet collection of care notes from our horticulturists. No jargon — just the habits that make plants thrive."
      />

      <section className="container-x pb-8">
        <div className="aspect-[16/8] overflow-hidden rounded-[2.5rem] shadow-soft">
          <img src={careImg} width={1400} height={1000} alt="Repotting" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="container-x py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CARE_TIPS.map((tip, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.article
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-3xl border border-border/60 bg-card p-8 hover:shadow-card transition-all"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-leaf/10 text-leaf">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-2xl text-foreground">{tip.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{tip.body}</p>
            </motion.article>
          );
        })}
      </section>

      <section className="container-x py-16">
        <div className="rounded-[2.5rem] bg-primary text-primary-foreground p-10 md:p-14 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs tracking-[0.28em] uppercase text-primary-foreground/60">Not sure what your plant needs?</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight">Send us a photo. We'll help.</h2>
            <p className="mt-4 text-primary-foreground/80 max-w-md">
              Our horticulturists reply personally on WhatsApp — no bots, no
              scripts. Yellowing leaves, pests, replanting worries — all fair game.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <a
              href={SITE.whatsapp("Hi Shrushti, I have a question about caring for my plant.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-primary-foreground text-primary px-7 py-3.5 text-sm"
            >
              Ask a horticulturist
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
