import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, MapPin, Mail, Clock, Menu, X, Star, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "(205) 535-2575";
const PHONE_LINK = "tel:+12055352575";
const ADDRESS = "1110 15th St Suite H, Tuscaloosa, AL 35401";
const EMAIL = "phoneclinictuscaloosa@gmail.com";

const services = [
  { label: "iPhone Repair", href: "/iphone-repair" },
  { label: "Samsung Repair", href: "/samsung-repair" },
  { label: "Tablet Repair", href: "/tablet-repair" },
  { label: "Console Repair", href: "/console-repair" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#", children: services },
  { label: "Get a Quote", href: "/quote" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#e60000] text-white text-sm py-1.5 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={PHONE_LINK} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone className="w-3.5 h-3.5" /> {PHONE}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> {ADDRESS}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-semibold">4.8</span>
            <span className="opacity-80">/ 1,021 Reviews</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#e60000] rounded-sm flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="font-heading text-lg font-bold tracking-tight text-foreground">
                Phone<span className="text-[#e60000]">Clinic</span>
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Tuscaloosa, AL
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-card border border-border rounded-lg shadow-xl py-2 min-w-[200px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                            location === child.href ? "text-[#e60000]" : "text-card-foreground"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    location === link.href
                      ? "text-[#e60000]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={PHONE_LINK}
              className="hidden sm:flex items-center gap-2 bg-[#e60000] text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-[#cc0000] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <div className="container py-4 space-y-1">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium rounded-sm hover:bg-accent"
                >
                  Home
                </Link>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-sm hover:bg-accent"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 space-y-1">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-sm hover:bg-accent"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  href="/quote"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium rounded-sm hover:bg-accent"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium rounded-sm hover:bg-accent"
                >
                  Contact
                </Link>
                <div className="pt-3 flex gap-2">
                  <a
                    href={PHONE_LINK}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#e60000] text-white px-4 py-3 rounded-sm text-sm font-semibold"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                  <a
                    href={`sms:+12055352575`}
                    className="flex-1 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-4 py-3 rounded-sm text-sm font-semibold"
                  >
                    <Mail className="w-4 h-4" /> Text Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a0a14] border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#e60000] rounded-sm flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight">
                Phone<span className="text-[#e60000]">Clinic</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tuscaloosa's trusted electronics repair shop with over 22 years of experience. Same-day repairs, premium parts, and a 1-year warranty.
            </p>
            <div className="flex items-center gap-1.5 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
              <span className="text-sm text-muted-foreground ml-1">4.8 / 1,021 reviews</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">
              Repair Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-muted-foreground hover:text-[#e60000] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a href={PHONE_LINK} className="flex items-start gap-2.5 text-sm text-muted-foreground hover:text-[#e60000] transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" /> {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-start gap-2.5 text-sm text-muted-foreground hover:text-[#e60000] transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" /> {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {ADDRESS}
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">
              Business Hours
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="tool-line mt-12 mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PhoneClinic. All rights reserved.</p>
          <p>1110 15th St Suite H, Tuscaloosa, AL 35401</p>
        </div>
      </div>

      {/* Mobile sticky CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border flex md:hidden">
        <a href={PHONE_LINK} className="flex-1 flex items-center justify-center gap-1.5 py-3.5 text-xs font-semibold text-white bg-green-600">
          <Phone className="w-3.5 h-3.5" /> Call Now
        </a>
        <a href="sms:+12055352575" className="flex-1 flex items-center justify-center gap-1.5 py-3.5 text-xs font-semibold text-white bg-blue-600">
          <Mail className="w-3.5 h-3.5" /> Text Us
        </a>
        <Link href="/quote" className="flex-1 flex items-center justify-center gap-1.5 py-3.5 text-xs font-semibold text-white bg-[#e60000]">
          Book Repair
        </Link>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      {/* Spacer for mobile sticky bar */}
      <div className="h-12 md:hidden" />
    </div>
  );
}
