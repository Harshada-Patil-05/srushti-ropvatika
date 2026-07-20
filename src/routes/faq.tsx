import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { FAQS, SITE } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Shrushti Ropvatika" },
      { name: "description", content: "Answers to common questions about visiting Shrushti Ropvatika, our plants, and our landscaping services." },
      { property: "og:title", content: "FAQ — Shrushti Ropvatika" },
      { property: "og:description", content: "Common questions about visiting, buying and gardening with us." },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title={<>Good questions, <em className="italic text-leaf font-normal">honest answers</em>.</>}
        description="Still curious? WhatsApp us any time — we usually reply within a few hours."
      />

      <section className="container-x pb-24 max-w-3xl">
        <div className="divide-y divide-border/70 border-y border-border/70">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left"
                >
                  <span className="font-display text-xl md:text-2xl text-foreground">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border shrink-0"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pr-16 text-muted-foreground leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl bg-secondary/60 p-8 md:p-10 text-center">
          <h3 className="font-display text-2xl text-foreground">Have a different question?</h3>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">Reach out on WhatsApp — a real person will reply.</p>
          <a
            href={SITE.whatsapp("Hi Shrushti, I have a question.")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground"
          >
            Message us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
