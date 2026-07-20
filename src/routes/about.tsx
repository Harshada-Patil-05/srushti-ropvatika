import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/site/PageHeader";
import heroImg from "@/assets/hero-nursery.jpg";
import careImg from "@/assets/plant-care.jpg";
import landscapeImg from "@/assets/services-landscape.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shrushti Ropvatika | Creating Greener Spaces for Over 16 Years" },
      {
        name: "description",
        content:
          "Shrushti Ropvatika is a customer-focused nursery in Ravet, Pune, offering healthy plants, gardening essentials, organic products and landscaping services for over 16 years.",
      },
      { property: "og:title", content: "About Shrushti Ropvatika" },
      {
        property: "og:description",
        content:
          "Discover the story of Shrushti Ropvatika and our journey towards creating greener homes and gardens.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={
          <>
            Growing a{" "}
            <em className="italic text-leaf font-normal">
              greener tomorrow
            </em>{" "}
            for over 19 years.
          </>
        }
        description="Founded by Mrs. Pushpa Gupta with a dream of creating a greener Earth, Shrushti Ropvatika has been helping families, businesses and gardening enthusiasts create beautiful green spaces through quality plants, gardening products and expert guidance."
      />

      <section className="container-x pb-16">
        <div className="aspect-[16/8] overflow-hidden rounded-[2.5rem] shadow-soft">
          <img src={heroImg} width={1600} height={1100} alt="Nursery interior" className="h-full w-full object-cover" />
        </div>
      </section>
      <section className="container-x py-20">
  <div className="max-w-4xl mx-auto text-center">
    <p className="eyebrow">Our Story</p>

    <h2 className="mt-4 font-display text-4xl text-foreground">
      A dream rooted in nature.
    </h2>

    <p className="mt-8 text-lg leading-8 text-muted-foreground">
      More than sixteen years ago, our mentor and founder,
      <strong> Mrs. Pushpa Gupta</strong>, had one simple dream—to create a
      greener Earth while helping people experience the joy of gardening.
      With this vision, she established Shrushti Ropvatika as a
      customer-focused nursery dedicated to quality, trust and sustainable
      living.
    </p>

    <p className="mt-6 text-lg leading-8 text-muted-foreground">
      Today, we proudly offer a wide collection of indoor and outdoor
      plants, flowering plants, fruit plants, fertilizers, homegrown
      organic manures, plant medicines, decorative pots, stands,
      gardening tools and complete landscaping solutions. Beyond
      traditional gardening, we also help our customers create beautiful
      wall gardens, vegetable gardens and attractive green spaces for
      homes and commercial properties.
    </p>
  </div>
</section>

      <section className="container-x py-20 grid lg:grid-cols-3 gap-14">
        <div>
          <p className="eyebrow">Our values</p>
          <h2 className="mt-3 font-display text-4xl text-foreground">What we stand for.</h2>
        </div>
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {[
            {
              t: "Customer Satisfaction",
              d: "Every customer receives honest advice and personalized recommendations to choose the right plants for their space."
            },
            {
              t: "Quality Products",
              d: "We provide healthy plants, organic fertilizers, gardening tools and accessories that meet high quality standards."
            },
            {
              t: "Greener Living",
              d: "Our mission is to inspire more people to embrace greenery and make nature a part of everyday life."
            },
            {
              t: "Complete Gardening Solutions",
              d: "From home gardens to landscaping projects, we provide everything needed to build and maintain beautiful green spaces."
            }
          ].map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-3xl border border-border/60 bg-card p-7"
            >
              <h3 className="font-display text-2xl text-foreground">{v.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
              <h2 className="mt-3 font-display text-4xl text-foreground">Our Journey</h2>
            <ol className="mt-10 space-y-8 border-l border-border/70 pl-6">
              {[
                {
                  y: "16+ Years Ago",
                  t: "The Beginning",
                  d: "Mrs. Pushpa Gupta established Shrushti Ropvatika with a vision of creating a greener Earth and helping people discover the joy of gardening."
                },
                {
                  y: "Growing Together",
                  t: "Expanding Our Nursery",
                  d: "Our collection grew to include indoor plants, flowering plants, fruit plants, fertilizers, gardening tools, decorative pots and organic products."
                },
                {
                  y: "Serving Every Garden",
                  t: "Beyond Traditional Gardening",
                  d: "We began offering landscaping services, wall gardens, vegetable gardens and artificial lawn solutions for homes and businesses."
                },
                {
                  y: "Today",
                  t: "A Trusted Green Destination",
                  d: "Shrushti Ropvatika continues to serve thousands of happy customers with quality plants, expert guidance and a commitment to creating greener spaces."
                }
              ].map((m) => (
                <li key={m.y} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-leaf" />
                  <div className="text-sm text-leaf tracking-widest">{m.y}</div>
                  <div className="mt-1 font-display text-xl text-foreground">{m.t}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-card"><img src={careImg} alt="" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" /></div>
            <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-card mt-10"><img src={landscapeImg} alt="" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" /></div>
          </div>
        </div>
      </section>
    </>
  );
}
