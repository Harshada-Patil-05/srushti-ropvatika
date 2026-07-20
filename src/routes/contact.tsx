import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit — Shrushti Ropvatika Nursery" },
      { name: "description", content: "Visit Shrushti Ropvatika in Ravet, Pune or WhatsApp us with your gardening question. Hours, directions and contact details." },
      { property: "og:title", content: "Contact — Shrushti Ropvatika" },
      { property: "og:description", content: "Visit us in Ravet, Pune or WhatsApp our team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", interest: "General enquiry", message: "" });

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Shrushti Ropvatika,%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AInterest: ${form.interest}%0A%0A${form.message}`;
    window.open(`https://wa.me/${SITE.phoneRaw}?text=${text}`, "_blank");
  };

  return (
    <>
      <PageHeader
        eyebrow="Visit us"
        title={<>The nursery <em className="italic text-leaf font-normal">is a short drive away</em>.</>}
        description="Drop in during our open hours, or send us a quick message on WhatsApp. We love a good gardening conversation."
      />

      <section className="container-x pb-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-4">
          <InfoCard icon={<MapPin className="h-5 w-5" />} title="Nursery address" body={SITE.address}
            action={{ label: "Get directions", href: SITE.mapsUrl }} />
          <InfoCard icon={<Phone className="h-5 w-5" />} title="Call us" body={SITE.phone}
            action={{ label: "Call now", href: `tel:${SITE.phoneRaw}` }} />
          <InfoCard icon={<Mail className="h-5 w-5" />} title="Email" body={SITE.email}
            action={{ label: "Send email", href: `mailto:${SITE.email}` }} />
          <InfoCard icon={<Clock className="h-5 w-5" />} title="Open hours" body={SITE.hours} />
        </div>

        <motion.form
          onSubmit={send}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-7 rounded-[2rem] border border-border/60 bg-card p-8 md:p-10 shadow-card"
        >
          <p className="eyebrow">Send an enquiry</p>
          <h2 className="mt-3 font-display text-3xl text-foreground">Tell us a little about what you're looking for.</h2>
          <p className="mt-3 text-sm text-muted-foreground">Submitting this opens a WhatsApp chat with our team — the fastest way to reach us.</p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Field label="Your name" required>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40" />
            </Field>
            <Field label="Phone" required>
              <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40" />
            </Field>
            <Field label="I'm interested in" className="md:col-span-2">
              <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40">
                {["General enquiry", "Buying plants", "Landscape design", "Garden setup", "Garden maintenance", "Consultation"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
            <Field label="Message" className="md:col-span-2">
              <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your space, plants you love, or what you'd like help with."
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40" />
            </Field>
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground hover:-translate-y-0.5 transition-transform"
          >
            <MessageCircle className="h-4 w-4" />
            Send on WhatsApp
          </button>
        </motion.form>
      </section>

      <section className="container-x pb-24">
        <div className="overflow-hidden rounded-[2.5rem] border border-border/60 shadow-card">
          <iframe
            title="Shrushti Ropvatika location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1890.2252238215865!2d73.7523879!3d18.643772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f6f21fb5df%3A0x4f0389357a264496!2sShrushti%20Rop%20Vatika!5e0!3m2!1sen!2sin!4v1783694116897!5m2!1sen!2sin"
            width="100%"
            height="440"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon, title, body, action }: { icon: React.ReactNode; title: string; body: string; action?: { label: string; href: string } }) {
  return (
    <div className="rounded-3xl border border-border/60 bg-card p-6">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-leaf/10 text-leaf shrink-0">{icon}</span>
        <div className="flex-1">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
          <div className="mt-1.5 text-foreground">{body}</div>
          {action && (
            <a href={action.href} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm text-leaf">
              {action.label} <ArrowRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, required, className, children }: { label: string; required?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}{required && <span className="text-clay"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
