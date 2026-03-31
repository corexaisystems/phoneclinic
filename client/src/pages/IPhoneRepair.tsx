import ServicePage from "@/components/ServicePage";
import { Smartphone } from "lucide-react";

const IPHONE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485897224/MofiVVvCY2VNzcivHq9rXM/iphone-repair-gEqT9WSB93Njr2EGs78LFc.webp";

export default function IPhoneRepair() {
  return (
    <ServicePage
      title="iPhone Repair"
      subtitle="Cracked screen? Dead battery? Broken camera? We fix every iPhone model — from the iPhone 6 to the latest iPhone 16 Pro Max. Same-day service, premium parts."
      heroImage={IPHONE_IMG}
      icon={<Smartphone className="w-4 h-4" />}
      description="At PhoneClinic, we specialize in professional iPhone repair services in Tuscaloosa, AL. Whether you have dropped your phone and shattered the screen, or your battery barely lasts an hour, our certified technicians can diagnose and fix the issue — usually in under an hour. We use premium-quality replacement parts and back every repair with our standard warranty."
      description2="We understand how essential your iPhone is to your daily life. That is why we offer walk-in service with no appointment needed. Our transparent pricing means no surprises — you will know the exact cost before we start any work. If we cannot fix it, you do not pay."
      features={[
        "All iPhone models supported (6 through 16 Pro Max)",
        "Screen replacement in 30-45 minutes",
        "Battery replacement while you wait",
        "Camera lens and module repair",
        "Charging port replacement",
        "Water damage recovery",
        "Speaker and microphone repair",
        "Home button and Face ID repair",
      ]}
      pricing={[
        { service: "Screen Replacement (iPhone 12+)", price: "From $79" },
        { service: "Screen Replacement (iPhone 11 & older)", price: "From $59" },
        { service: "Battery Replacement", price: "From $49" },
        { service: "Charging Port Repair", price: "From $59" },
        { service: "Camera Repair", price: "From $69" },
        { service: "Water Damage Recovery", price: "From $79" },
      ]}
    />
  );
}
