import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import {
  Check,
  MessageCircle,
  Sprout,
  TreePine,
  Leaf,
  Flower2,
} from 'lucide-react'
// import { PageHeader } from '@/components/site/PageHeader'
import landscapeImg from '@/assets/service_image.jpg'
import { SERVICES, SITE } from '@/lib/site'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: 'Services — Landscape Design, Garden Setup & Care' },
      {
        name: 'description',
        content:
          'Landscape design, garden setup, maintenance and consultation for homes and businesses. By the team at Shrushti Ropvatika, Ravet, Pune.',
      },
      { property: 'og:title', content: 'Services — Shrushti Ropvatika' },
      {
        property: 'og:description',
        content: 'Design, build and care for gardens — big or small.',
      },
    ],
  }),
  component: Services,
})

const icons = {
  sprout: Sprout,
  shovel: TreePine,
  leaf: Leaf,
  book: Flower2,
} as const

function Services() {
  return (
    <>
      <section className="container-x py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Our Services</p>

            <h1 className="mt-3 font-display text-5xl lg:text-6xl leading-tight text-foreground">
              Everything your
              <br />
              <em className="italic text-leaf font-normal">garden needs.</em>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              At <strong>Shrushti Ropvatika</strong>, we provide much more than
              plants. From premium quality indoor and outdoor plants to
              decorative pots, fertilizers, gardening accessories and thoughtful
              plant gifting, we help you create beautiful green spaces with
              expert guidance.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Check className="text-leaf h-5 w-5" />
                <span>Premium Indoor & Outdoor Plants</span>
              </div>

              <div className="flex items-center gap-3">
                <Check className="text-leaf h-5 w-5" />
                <span>Quality Fertilizers & Plant Care Products</span>
              </div>

              <div className="flex items-center gap-3">
                <Check className="text-leaf h-5 w-5" />
                <span>Decorative Pots & Designer Planters</span>
              </div>

              <div className="flex items-center gap-3">
                <Check className="text-leaf h-5 w-5" />
                <span>Plant Stands & Garden Accessories</span>
              </div>

              <div className="flex items-center gap-3">
                <Check className="text-leaf h-5 w-5" />
                <span>Plant Gifting & Customized Green Gifts</span>
              </div>
            </div>

            <a
              href={SITE.whatsapp(
                "Hi, I'd like to know more about your services.",
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground hover:-translate-y-1 transition"
            >
              <MessageCircle className="h-4 w-4" />
              Enquire on WhatsApp
            </a>
          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-[750px] mx-auto overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src={landscapeImg}
                alt="Shrushti Ropvatika"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-x py-16 grid gap-6 md:grid-cols-2">
        {SERVICES.map((s, i) => {
          const Icon = icons[s.icon as keyof typeof icons] ?? Leaf
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-[2rem] bg-card border border-border/60 p-8 md:p-10 hover:shadow-card transition-all"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-leaf/10 text-leaf">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  0{i + 1}
                </div>
              </div>
              <h3 className="mt-6 font-display text-3xl text-foreground">
                {s.title}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {s.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <Check className="h-4 w-4 mt-0.5 text-leaf shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={SITE.whatsapp(
                  `Hi Shrushti, I'd like to enquire about ${s.title}.`,
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm text-leaf group-hover:gap-3 transition-all"
              >
                <MessageCircle className="h-4 w-4" /> Enquire about{' '}
                {s.title.toLowerCase()}
              </a>
            </motion.div>
          )
        })}
      </section>

      <section className="container-x py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-foreground">
            A simple, honest process.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {[
            {
              n: '01',
              t: 'Conversation',
              d: 'You share your space, your dreams and your budget. We listen.',
            },
            {
              n: '02',
              t: 'Site visit',
              d: 'We visit, measure and understand your light, soil and lifestyle.',
            },
            {
              n: '03',
              t: 'Design',
              d: 'A clear plan with plant choices, materials and a fair estimate.',
            },
            {
              n: '04',
              t: 'Care',
              d: 'We plant, build and stay on for maintenance — for as long as you like.',
            },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-3xl bg-card border border-border/60 p-7"
            >
              <div className="text-sm text-leaf tracking-widest">{s.n}</div>
              <h3 className="mt-3 font-display text-2xl text-foreground">
                {s.t}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
