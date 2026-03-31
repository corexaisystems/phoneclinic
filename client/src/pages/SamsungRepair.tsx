import ServicePage from "@/components/ServicePage";
import { Smartphone } from "lucide-react";

const SAMSUNG_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485897224/MofiVVvCY2VNzcivHq9rXM/samsung-repair-mhP8dd6xmHD6QSJ2UynfCR.webp";

export default function SamsungRepair() {
  return (
    <ServicePage
      title="Samsung Repair"
      subtitle="Galaxy S, Note, Z Flip, Z Fold — we repair every Samsung model. AMOLED screen replacements, battery swaps, and water damage recovery."
      heroImage={SAMSUNG_IMG}
      icon={<Smartphone className="w-4 h-4" />}
      description="Samsung Galaxy devices feature some of the most advanced display and camera technology on the market, and repairing them requires specialized expertise. At PhoneClinic in Tuscaloosa, our technicians are trained specifically in Samsung AMOLED screen replacement, battery swaps, and component-level board repair. We stock parts for the full Galaxy lineup — from the Galaxy S21 through S25 Ultra, the Note series, and the innovative Z Flip and Z Fold foldable devices."
      description2="Samsung water damage is one of our most common repairs. Even though Galaxy phones carry an IP68 rating, real-world exposure can still cause issues. Our ultrasonic cleaning and board-level drying process has a high success rate for water-damaged Samsung devices. We will always provide a free diagnostic before recommending any repair."
      features={[
        "Galaxy S, Note, A, Z Flip, and Z Fold models",
        "AMOLED screen replacement",
        "Battery replacement",
        "Charging port and USB-C repair",
        "Camera module replacement",
        "Water damage recovery",
        "Back glass replacement",
        "Software troubleshooting",
      ]}
      pricing={[
        { service: "AMOLED Screen (Galaxy S24+)", price: "From $149" },
        { service: "AMOLED Screen (Galaxy S21-S23)", price: "From $99" },
        { service: "Battery Replacement", price: "From $49" },
        { service: "Charging Port Repair", price: "From $59" },
        { service: "Back Glass Replacement", price: "From $39" },
        { service: "Water Damage Recovery", price: "From $79" },
      ]}
    />
  );
}
