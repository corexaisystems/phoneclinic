/*
 * DESIGN: "Precision Workshop" — Industrial Craft Aesthetic
 * Dark charcoal base, electric red (#e60000) accent, warm off-white content.
 * Asymmetric layouts, staggered cards, circuit-board micro-grid patterns.
 * Space Grotesk headings, DM Sans body.
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Phone, Shield, Clock, Zap, Star, CheckCircle, ArrowRight,
  Smartphone, Tablet, Gamepad2, ChevronRight, Award, Wrench
} from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485897224/MofiVVvCY2VNzcivHq9rXM/hero-bg-N4KwYQ363VXTeDeDJM2pda.webp";
const IPHONE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485897224/MofiVVvCY2VNzcivHq9rXM/iphone-repair-gEqT9WSB93Njr2EGs78LFc.webp";
const SAMSUNG_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485897224/MofiVVvCY2VNzcivHq9rXM/samsung-repair-mhP8dd6xmHD6QSJ2UynfCR.webp";
const TABLET_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485897224/MofiVVvCY2VNzcivHq9rXM/tablet-repair-jHd7SxmYBMAvTGxiHcbZWL.webp";
const CONSOLE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485897224/MofiVVvCY2VNzcivHq9rXM/console-repair-iFyDZd48TPFJ7LiCP4nRa4.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const }
  }),
};

const services = [
  { title: "iPhone Repair", href: "/iphone-repair", image: IPHONE_IMG, icon: Smartphone, desc: "Screen, battery, camera, and charging port repairs for all iPhone models." },
  { title: "Samsung Repair", href: "/samsung-repair", image: SAMSUNG_IMG, icon: Smartphone, desc: "AMOLED screen replacements, battery swaps, and water damage recovery." },
  { title: "Tablet Repair", href: "/tablet-repair", image: TABLET_IMG, icon: Tablet, desc: "iPad and Android tablet screen, battery, and charging port repairs." },
  { title: "Console Repair", href: "/console-repair", image: CONSOLE_IMG, icon: Gamepad2, desc: "PlayStation, Xbox, and Nintendo Switch HDMI, disc drive, and board repairs." },
];

const guarantees = [
  { icon: Clock, title: "Same-Day Repair", desc: "Most repairs completed in under an hour" },
  { icon: Shield, title: "1-Year Warranty", desc: "Standard on most of our repairs" },
  { icon: Zap, title: "Free Diagnostics", desc: "We'll identify the issue at no charge" },
  { icon: Award, title: "Price Match + $5", desc: "We beat any local competitor's price" },
];

const stats = [
  { value: "22+", label: "Years Experience" },
  { value: "4.8", label: "Star Rating" },
  { value: "1,021", label: "Customer Reviews" },
  { value: "45min", label: "Avg Repair Time" },
];

const reviews = [
  { name: "John S.", text: "Fixed my iPhone screen in 30 minutes. Incredible service and fair pricing. Will definitely be back!", rating: 5 },
  { name: "Sarah B.", text: "They saved my water-damaged Samsung when I thought it was a goner. The staff was so friendly and professional.", rating: 5 },
  { name: "Michael J.", text: "Best phone repair in Tuscaloosa, hands down. They beat the price I was quoted elsewhere by $15!", rating: 5 },
];

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14]/95 via-[#0a0a14]/80 to-[#0a0a14]/40" />
        </div>

        <div className="container relative z-10 py-20 lg:py-28">
          <div className="max-w-2xl">
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-white/80">4.8 Stars &middot; 1,021 Reviews</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              Expert Phone Repair in{" "}
              <span className="text-[#e60000]">Tuscaloosa, AL</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl"
            >
              With over 22 years of experience, PhoneClinic delivers fast, reliable, same-day repairs for phones, tablets, and game consoles. Premium parts. 1-year warranty. No fix, no fee.
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

        {/* Decorative red line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e60000] to-transparent" />
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-[#0f0f1a] border-b border-border py-8">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="text-center"
              >
                <div className="font-heading text-3xl lg:text-4xl font-bold text-[#e60000]">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GUARANTEES ===== */}
      <section className="circuit-bg py-20 lg:py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#e60000] font-semibold mb-3">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight">
              The PhoneClinic <span className="text-[#e60000]">Guarantee</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {guarantees.map((g, i) => (
              <motion.div
                key={g.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group bg-card border border-border rounded-lg p-6 hover:border-[#e60000]/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5"
              >
                <div className="w-12 h-12 bg-[#e60000]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#e60000]/20 transition-colors">
                  <g.icon className="w-6 h-6 text-[#e60000]" />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2">{g.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 lg:py-24 bg-[#0a0a14]">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#e60000] font-semibold mb-3">
              Our Services
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight">
              What We <span className="text-[#e60000]">Repair</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.href}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Link
                  href={service.href}
                  className="group block relative overflow-hidden rounded-lg border border-border bg-card hover:border-[#e60000]/40 transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#e60000] rounded-sm flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-sm text-white/70 mb-3">{service.desc}</p>
                    <span className="inline-flex items-center gap-1 text-[#e60000] text-sm font-semibold group-hover:gap-2 transition-all">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT / EXPERIENCE ===== */}
      <section className="circuit-bg py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="lg:col-span-3"
            >
              <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#e60000] font-semibold mb-3">
                About PhoneClinic
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                22 Years of Precision <span className="text-[#e60000]">Repair Expertise</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Welcome to PhoneClinic, your trusted destination for professional phone repair in Tuscaloosa, AL. We understand that a broken device can disrupt your entire day, disconnecting you from work, family, and friends. That is why our dedicated team is committed to providing fast, reliable, and affordable repair services to get you back online as quickly as possible.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 22 years of experience in the digital device repair industry, our expert technicians have seen and fixed it all. From shattered screens and rapid battery drains to complex water damage and motherboard issues, we possess the knowledge and specialized tools required to restore your device to peak condition.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Free diagnostic testing", "No obligation to repair", "Repairs while you wait", "No fix, no fee", "We beat competitor prices", "30-day warranty minimum"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#e60000] shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="lg:col-span-2"
            >
              <div className="relative">
                <img
                  src={IPHONE_IMG}
                  alt="PhoneClinic technician at work"
                  className="rounded-lg w-full"
                />
                <div className="absolute -bottom-4 -left-4 bg-[#e60000] text-white rounded-lg p-5 shadow-xl">
                  <div className="font-heading text-3xl font-bold">22+</div>
                  <div className="text-sm text-white/80">Years of Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-20 lg:py-24 bg-[#0a0a14]">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#e60000] font-semibold mb-3">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight">
              What Our <span className="text-[#e60000]">Customers Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#e60000]/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-[#e60000]">{review.name[0]}</span>
                  </div>
                  <span className="text-sm font-medium">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e60000] to-[#990000]" />
        <div className="absolute inset-0 circuit-bg opacity-20" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <Wrench className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
              Ready to Fix Your Device?
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Get a free quote in 60 seconds, or just walk in. No appointment necessary for most repairs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-white text-[#e60000] px-8 py-3.5 rounded-sm text-sm font-bold hover:bg-white/90 transition-all shadow-lg"
              >
                Get Your Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+12055352575"
                className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white/40 px-8 py-3.5 rounded-sm text-sm font-bold hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" /> Call (205) 535-2575
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
