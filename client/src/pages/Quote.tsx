/*
 * DESIGN: "Precision Workshop" — Quote Funnel
 * Multi-step form: Device Type → Issue → Contact Info → Confirmation
 * Dark charcoal base, electric red (#e60000) accent.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone, Tablet, Gamepad2, ArrowRight, ArrowLeft, Phone,
  CheckCircle, Monitor, Zap, Shield, Clock
} from "lucide-react";
import { toast } from "sonner";

const STEPS = ["Device", "Issue", "Details", "Confirm"];

const deviceTypes = [
  { id: "iphone", label: "iPhone", icon: Smartphone },
  { id: "samsung", label: "Samsung", icon: Smartphone },
  { id: "tablet", label: "Tablet", icon: Tablet },
  { id: "console", label: "Game Console", icon: Gamepad2 },
  { id: "other", label: "Other Device", icon: Monitor },
];

const issuesByDevice: Record<string, string[]> = {
  iphone: ["Cracked Screen", "Battery Replacement", "Charging Port", "Camera Repair", "Water Damage", "Speaker/Mic Issue", "Other"],
  samsung: ["Cracked Screen", "Battery Replacement", "Charging Port", "Camera Repair", "Water Damage", "Back Glass", "Other"],
  tablet: ["Cracked Screen", "Battery Replacement", "Charging Port", "Home/Power Button", "Speaker Issue", "Other"],
  console: ["HDMI Port", "Disc Drive", "Overheating", "Power Supply", "Controller Drift", "Other"],
  other: ["Screen Issue", "Battery Issue", "Charging Issue", "Water Damage", "Other"],
};

export default function Quote() {
  const [step, setStep] = useState(0);
  const [device, setDevice] = useState("");
  const [issue, setIssue] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhoneNum] = useState("");
  const [model, setModel] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canNext = () => {
    if (step === 0) return device !== "";
    if (step === 1) return issue !== "";
    if (step === 2) return name.trim() !== "" && phone.trim() !== "";
    return true;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    toast.success("Quote request submitted! We'll contact you shortly.");
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center circuit-bg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="font-heading text-2xl font-bold mb-3">Quote Request Received!</h2>
          <p className="text-muted-foreground mb-2">
            Thank you, <strong className="text-foreground">{name}</strong>. We have received your repair request for your <strong className="text-foreground">{deviceTypes.find(d => d.id === device)?.label}</strong>.
          </p>
          <p className="text-muted-foreground mb-6">
            A technician will contact you at <strong className="text-foreground">{phone}</strong> within 15 minutes during business hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+12055352575"
              className="inline-flex items-center justify-center gap-2 bg-[#e60000] text-white px-6 py-3 rounded-sm text-sm font-semibold hover:bg-[#cc0000] transition-all"
            >
              <Phone className="w-4 h-4" /> Call Now Instead
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0a0a14] py-12 lg:py-16 border-b border-border">
        <div className="container text-center">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#e60000] font-semibold mb-3">
            Free Quote
          </span>
          <h1 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight mb-3">
            Get Your Repair Quote in <span className="text-[#e60000]">60 Seconds</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tell us about your device and we will provide a fast, accurate quote. No obligation.
          </p>
        </div>
      </section>

      {/* Guarantees */}
      <section className="bg-[#0f0f1a] border-b border-border py-4">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Zap, text: "Free Diagnostics" },
              { icon: Shield, text: "1-Year Warranty" },
              { icon: Clock, text: "Same-Day Service" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-xs text-muted-foreground">
                <item.icon className="w-3.5 h-3.5 text-[#e60000]" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="circuit-bg py-16 lg:py-20">
        <div className="container max-w-2xl">
          {/* Progress bar */}
          <div className="flex items-center gap-2 mb-10">
            {STEPS.map((s, i) => (
              <div key={s} className="flex-1 flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    i <= step ? "bg-[#e60000] text-white" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-xs hidden sm:block ${i <= step ? "text-foreground" : "text-muted-foreground"}`}>
                  {s}
                </span>
                {i < STEPS.length - 1 && (
                  <div className={`flex-1 h-0.5 ${i < step ? "bg-[#e60000]" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* Step 0: Device */}
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="font-heading text-xl font-bold mb-6">What device needs repair?</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {deviceTypes.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setDevice(d.id)}
                      className={`flex flex-col items-center gap-3 p-5 rounded-lg border transition-all ${
                        device === d.id
                          ? "border-[#e60000] bg-[#e60000]/10 text-foreground"
                          : "border-border bg-card text-muted-foreground hover:border-[#e60000]/30"
                      }`}
                    >
                      <d.icon className={`w-7 h-7 ${device === d.id ? "text-[#e60000]" : ""}`} />
                      <span className="text-sm font-medium">{d.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 1: Issue */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="font-heading text-xl font-bold mb-6">What is the issue?</h2>
                <div className="grid grid-cols-2 gap-3">
                  {(issuesByDevice[device] || []).map((iss) => (
                    <button
                      key={iss}
                      onClick={() => setIssue(iss)}
                      className={`text-left p-4 rounded-lg border transition-all text-sm ${
                        issue === iss
                          ? "border-[#e60000] bg-[#e60000]/10 text-foreground"
                          : "border-border bg-card text-muted-foreground hover:border-[#e60000]/30"
                      }`}
                    >
                      {iss}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Contact */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="font-heading text-xl font-bold mb-6">Your contact details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e60000] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhoneNum(e.target.value)}
                      placeholder="(205) 555-0123"
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e60000] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Device Model (optional)</label>
                    <input
                      type="text"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      placeholder="e.g. iPhone 15 Pro, Galaxy S24"
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e60000] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Additional Notes (optional)</label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Tell us more about the issue..."
                      rows={3}
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e60000] transition-colors resize-none"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Confirm */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="font-heading text-xl font-bold mb-6">Review your request</h2>
                <div className="bg-card border border-border rounded-lg divide-y divide-border">
                  <div className="flex justify-between px-5 py-4">
                    <span className="text-sm text-muted-foreground">Device</span>
                    <span className="text-sm font-medium">{deviceTypes.find(d => d.id === device)?.label}</span>
                  </div>
                  <div className="flex justify-between px-5 py-4">
                    <span className="text-sm text-muted-foreground">Issue</span>
                    <span className="text-sm font-medium">{issue}</span>
                  </div>
                  <div className="flex justify-between px-5 py-4">
                    <span className="text-sm text-muted-foreground">Name</span>
                    <span className="text-sm font-medium">{name}</span>
                  </div>
                  <div className="flex justify-between px-5 py-4">
                    <span className="text-sm text-muted-foreground">Phone</span>
                    <span className="text-sm font-medium">{phone}</span>
                  </div>
                  {model && (
                    <div className="flex justify-between px-5 py-4">
                      <span className="text-sm text-muted-foreground">Model</span>
                      <span className="text-sm font-medium">{model}</span>
                    </div>
                  )}
                  {notes && (
                    <div className="flex justify-between px-5 py-4">
                      <span className="text-sm text-muted-foreground">Notes</span>
                      <span className="text-sm font-medium max-w-[200px] text-right">{notes}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-medium border border-border hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>

            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canNext()}
                className="inline-flex items-center gap-2 bg-[#e60000] text-white px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-[#cc0000] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                Next <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 bg-[#e60000] text-white px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-[#cc0000] transition-all"
              >
                Submit Quote Request <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
