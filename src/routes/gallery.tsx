import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";

// Indoor
import indoor1 from "@/assets/cat-indoor.jpg";
import indoor2 from "@/assets/indoor1.jpeg";
import indoor3 from "@/assets/indoor4.jpeg";
import indoor4 from "@/assets/indoor3.jpeg";
import indoor5 from "@/assets/indoor5.png";

// Outdoor
import outdoor1 from "@/assets/cat-outdoor.jpg";
import outdoor2 from "@/assets/outdoor1.jpeg";
import outdoor3 from "@/assets/outdoor2.jpeg";
import outdoor4 from "@/assets/outdoor3.jpeg";

// Pottery
import pot1 from "@/assets/pot5.jpeg";
import pot2 from "@/assets/pot2.jpeg";
import pot3 from "@/assets/pot4.jpeg";
import pot4 from "@/assets/pot3.jpeg";

// Fertilizers
import fertilizer1 from "@/assets/fertilizer1.jpeg";
import fertilizer2 from "@/assets/fertilizer4.jpg";
import fertilizer3 from "@/assets/fertilizer3.jpeg";
import fertilizer4 from "@/assets/fertilizer2.jpeg";

// Plant Stands
import stand1 from "@/assets/stand1.avif";
import stand2 from "@/assets/stand5.jpeg";
import stand3 from "@/assets/stand3.jpg";
import stand4 from "@/assets/stand4.jpg";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
});

const sections = [
  {
    title: "Indoor Plants",
    subtitle: "Elegant indoor plants to refresh your home and office.",
    images: [indoor1, indoor2, indoor3, indoor4, indoor5],
  },
  {
    title: "Outdoor Plants",
    subtitle:
      "Beautiful flowering and landscaping plants for every garden.",
    images: [outdoor1, outdoor2, outdoor3, outdoor4],
  },
  {
    title: "Decorative Pottery",
    subtitle:
      "Designer pots and planters to complement every plant.",
    images: [pot1, pot2, pot3, pot4],
  },
  {
    title: "Fertilizers & Plant Care",
    subtitle:
      "Premium fertilizers and plant care products for healthy growth.",
    images: [fertilizer1, fertilizer2, fertilizer3, fertilizer4],
  },
  {
    title: "Plant Stands",
    subtitle:
      "Stylish wooden and metal stands for elegant plant display.",
    images: [stand1, stand2, stand3, stand4],
  },
];

function Gallery() {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={<>Explore our Collection</>}
        description="Browse our wide range of premium indoor plants, outdoor plants, decorative pottery, fertilizers, and plant stands available at Shrushti Ropvatika."
      />

      <section className="container-x pt-0 pb-20 space-y-20">
        {sections.map((section) => {
          const isExpanded = expandedSections[section.title];

          const visibleImages = isExpanded
            ? section.images
            : section.images.slice(0, 4);

          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="font-display text-4xl text-foreground">
                  {section.title}
                </h2>

                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  {section.subtitle}
                </p>
              </div>

              {/* Images */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {visibleImages.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded-3xl shadow-card"
                  >
                    <img
                      src={img}
                      alt={`${section.title} ${i + 1}`}
                      className="w-full h-80 object-cover hover:scale-110 transition duration-700"
                    />
                  </motion.div>
                ))}
              </div>

              {/* View More / Show Less */}
              {section.images.length > 4 && (
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() => toggleSection(section.title)}
                    className="rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {isExpanded ? "Show Less" : "View More"}
                  </button>
                </div>
              )}
            </motion.div>
          );
        })}
      </section>
    </>
  );
}
