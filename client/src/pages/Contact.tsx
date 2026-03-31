/*
 * DESIGN: "Precision Workshop" — Contact Page
 * Dark charcoal base, electric red (#e60000) accent.
 * Space Grotesk headings, DM Sans body.
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Phone, MapPin, Mail, Clock, ArrowRight, Navigation, Star, MessageSquare
} from "lucide-react";
import { MapView } from "@/components/Map";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const }
  }),
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "(205) 535-2575",
    link: "tel:+12055352575",
    desc: "Call us during business hours",
  },
  {
    icon: MessageSquare,
    title: "Text",
    value: "(205) 535-2575",
    link: "sms:+12055352575",
    desc: "Text us anytime for a quick response",
  },
  {
    icon: Mail,
    title: "Email",
    value: "phoneclinictuscaloosa@gmail.com",
    link: "mailto:phoneclinictuscaloosa@gmail.com",
    desc: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "1110 15th St Suite H, Tuscaloosa, AL 35401",
    link: "https://maps.google.com/?q=1110+15th+St+Suite+H+Tuscaloosa+AL+35401",
    desc: "Walk-ins welcome during business hours",
  },
];

const hours = [
  { day: "Monday", time: "10:00 AM - 7:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "10:00 AM - 7:00 PM" },
  { day: "Thursday", time: "10:00 AM - 7:00 PM" },
  { day: "Friday", time: "10:00 AM - 7:00 PM" },
  { day: "Saturday", time: "10:00 AM - 7:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
  const handleMapReady = (map: google.maps.Map) => {
    const position = { lat: 33.2098, lng: -87.5692 };
    map.setCenter(position);
    map.setZoom(16);
    new google.maps.Marker({
      position,
      map,
      title: "PhoneClinic - Tuscaloosa, AL",
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0a0a14] py-12 lg:py-16 border-b border-border">
        <div className="container text-center">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#e60000] font-semibold mb-3">
            Contact Us
          </span>
          <h1 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight mb-3">
            Visit Us in <span className="text-[#e60000]">Tuscaloosa</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Walk in for a free diagnostic, or reach out by phone, text, or email. We are here to help.
          </p>
        </div>
      </section>

      {/* Contact cards + Map */}
      <section className="circuit-bg py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.title === "Address" ? "_blank" : undefined}
                  rel={info.title === "Address" ? "noopener noreferrer" : undefined}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  custom={i}
                  variants={fadeUp}
                  className="block flex items-start gap-4 p-5 bg-card border border-border rounded-lg hover:border-[#e60000]/30 transition-all group"
                >
                  <div className="w-10 h-10 bg-[#e60000]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#e60000]/20 transition-colors">
                    <info.icon className="w-5 h-5 text-[#e60000]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-0.5">{info.title}</h3>
                    <p className="text-sm text-foreground">{info.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{info.desc}</p>
                  </div>
                </motion.a>
              ))}

              {/* Hours */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={4}
                variants={fadeUp}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <div className="bg-[#e60000] px-5 py-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white" />
                  <h3 className="font-heading font-bold text-white text-sm">Business Hours</h3>
                </div>
                <div className="divide-y divide-border">
                  {hours.map((h) => {
                    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
                    const isToday = h.day === today;
                    return (
                      <div
                        key={h.day}
                        className={`flex justify-between px-5 py-3 text-sm ${isToday ? "bg-[#e60000]/5" : ""}`}
                      >
                        <span className={isToday ? "font-semibold text-[#e60000]" : "text-muted-foreground"}>
                          {h.day} {isToday && "(Today)"}
                        </span>
                        <span className={`font-medium ${h.time === "Closed" ? "text-muted-foreground" : ""}`}>
                          {h.time}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="lg:col-span-3"
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden h-full min-h-[400px] lg:min-h-[600px]">
                <MapView onMapReady={handleMapReady} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directions CTA */}
      <section className="bg-[#0a0a14] py-12 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#e60000]/10 rounded-lg flex items-center justify-center">
                <Navigation className="w-6 h-6 text-[#e60000]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">1110 15th St Suite H</h3>
                <p className="text-sm text-muted-foreground">Tuscaloosa, AL 35401 — Walk-ins welcome</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://maps.google.com/?q=1110+15th+St+Suite+H+Tuscaloosa+AL+35401"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#e60000] text-white px-6 py-3 rounded-sm text-sm font-semibold hover:bg-[#cc0000] transition-all"
              >
                Get Directions <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:bg-accent transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e60000] to-[#990000]" />
        <div className="container relative z-10 text-center">
          <div className="flex justify-center gap-0.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <h2 className="font-heading text-2xl lg:text-3xl font-bold tracking-tight text-white mb-3">
            Rated 4.8 Stars by 1,021 Customers
          </h2>
          <p className="text-white/80 max-w-md mx-auto mb-6">
            Join thousands of satisfied customers in Tuscaloosa who trust PhoneClinic for their device repairs.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-white text-[#e60000] px-8 py-3.5 rounded-sm text-sm font-bold hover:bg-white/90 transition-all shadow-lg"
          >
            Get Your Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
