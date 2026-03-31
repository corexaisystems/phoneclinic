/*
 * DESIGN: "Precision Workshop" — Reusable service page template
 * Dark charcoal base, electric red (#e60000) accent.
 * Space Grotesk headings, DM Sans body.
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle, Clock, Shield, Zap } from "lucide-react";
import { type ReactNode } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const }
  }),
};

interface PricingItem {
  service: string;
  price: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  description2?: string;
  features: string[];
  pricing: PricingItem[];
  icon: ReactNode;
}

export default function ServicePage({
  title, subtitle, heroImage, description, description2, features, pricing, icon
}: ServicePageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14]/95 via-[#0a0a14]/85 to-[#0a0a14]/50" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-[#e60000] text-xs uppercase tracking-[0.25em] font-semibold mb-4"
            >
              {icon}
              <span>Repair Services</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 leading-relaxed mb-8"
            >
              {subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-[#e60000] text-white px-7 py-3.5 rounded-sm text-sm font-semibold hover:bg-[#cc0000] transition-all hover:shadow-lg hover:shadow-red-500/20"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+12055352575"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-7 py-3.5 rounded-sm text-sm font-semibold hover:bg-white/20 transition-all"
              >
                <Phone className="w-4 h-4" /> (205) 535-2575
              </a>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e60000] to-transparent" />
      </section>

      {/* Guarantees bar */}
      <section className="bg-[#0f0f1a] border-b border-border py-6">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Clock, text: "Same-Day Repair" },
              { icon: Shield, text: "1-Year Warranty" },
              { icon: Zap, text: "Free Diagnostics" },
            ].map((item, i) => (
              <div key={item.text} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <item.icon className="w-4 h-4 text-[#e60000]" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description + Features */}
      <section className="circuit-bg py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="lg:col-span-3"
            >
              <h2 className="font-heading text-2xl lg:text-3xl font-bold tracking-tight mb-6">
                Professional <span className="text-[#e60000]">{title}</span> in Tuscaloosa
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
              {description2 && <p className="text-muted-foreground leading-relaxed mb-6">{description2}</p>}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#e60000] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pricing table */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="lg:col-span-2"
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="bg-[#e60000] px-6 py-4">
                  <h3 className="font-heading font-bold text-white text-lg">Pricing Guide</h3>
                  <p className="text-white/70 text-xs mt-0.5">Starting prices — final quote after free diagnostic</p>
                </div>
                <div className="divide-y divide-border">
                  {pricing.map((item) => (
                    <div key={item.service} className="flex items-center justify-between px-6 py-4">
                      <span className="text-sm">{item.service}</span>
                      <span className="text-sm font-semibold text-[#e60000]">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-4 bg-secondary/50">
                  <Link
                    href="/quote"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#e60000] text-white px-6 py-3 rounded-sm text-sm font-semibold hover:bg-[#cc0000] transition-all"
                  >
                    Get Your Exact Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e60000] to-[#990000]" />
        <div className="container relative z-10 text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold tracking-tight text-white mb-4">
            Need {title}?
          </h2>
          <p className="text-white/80 max-w-lg mx-auto mb-8">
            Walk in or get a quote online. Most repairs are completed the same day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-white text-[#e60000] px-8 py-3.5 rounded-sm text-sm font-bold hover:bg-white/90 transition-all shadow-lg"
            >
              Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+12055352575"
              className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white/40 px-8 py-3.5 rounded-sm text-sm font-bold hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" /> Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
