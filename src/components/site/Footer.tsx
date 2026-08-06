import { Link } from "@tanstack/react-router";
import { Leaf, MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-[color-mix(in_oklab,var(--primary)_96%,white)] text-primary-foreground">
      <div className="container-x py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-display text-2xl">Shrushti Ropvatika</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/70">
            A family-run nursery growing healthy plants and designing living
            gardens across Maharashtra. Visit us — every plant tells a story
            best seen in person.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/shrushti_agro/"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/ShrushtiRopvatika/"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm tracking-[0.28em] uppercase text-primary-foreground/60">
            Explore
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm tracking-[0.28em] uppercase text-primary-foreground/60">
            Visit
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{SITE.hours}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
  <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
    
    <p>© {new Date().getFullYear()} Shrushti Ropvatika. Grown with care.</p>

    <p>
      Designed & Developed by{" "}
      <a
        href="https://wa.me/917020735633?text=Hi%20Harshada,%20I%20visited%20the%20Shrushti%20Ropvatika%20website%20and%20would%20like%20to%20discuss%20building%20a%20website."
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-primary-foreground hover:text-green-300 underline transition-colors"
      >
        Harshada Patil
      </a>
    </p>

  </div>
</div>
    </footer>
  );
}
