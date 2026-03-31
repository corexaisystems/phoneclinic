import ServicePage from "@/components/ServicePage";
import { Tablet } from "lucide-react";

const TABLET_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485897224/MofiVVvCY2VNzcivHq9rXM/tablet-repair-jHd7SxmYBMAvTGxiHcbZWL.webp";

export default function TabletRepair() {
  return (
    <ServicePage
      title="Tablet Repair"
      subtitle="iPad, Samsung Galaxy Tab, and Android tablet repair. Cracked screens, dead batteries, and charging issues fixed same-day."
      heroImage={TABLET_IMG}
      icon={<Tablet className="w-4 h-4" />}
      description="Tablets have become essential tools for work, school, and entertainment. When your iPad or Samsung Galaxy Tab breaks, it can feel like losing a laptop and a notebook at the same time. At PhoneClinic in Tuscaloosa, we provide expert tablet repair services for all major brands and models. From cracked iPad screens to Galaxy Tab charging port issues, our technicians have the tools and training to get your tablet back in working order quickly."
      description2="We carry parts for iPad Air, iPad Pro, iPad Mini, and standard iPad models, as well as Samsung Galaxy Tab S and A series devices. Our screen replacements use high-quality digitizer and LCD assemblies to ensure your touch responsiveness and display clarity are restored to factory standards."
      features={[
        "iPad (all generations and models)",
        "Samsung Galaxy Tab S and A series",
        "Screen and digitizer replacement",
        "Battery replacement",
        "Charging port repair",
        "Home button and power button repair",
        "Speaker and microphone repair",
        "Software troubleshooting",
      ]}
      pricing={[
        { service: "iPad Screen Replacement", price: "From $89" },
        { service: "iPad Pro Screen Replacement", price: "From $149" },
        { service: "Galaxy Tab Screen Replacement", price: "From $79" },
        { service: "Tablet Battery Replacement", price: "From $59" },
        { service: "Charging Port Repair", price: "From $49" },
        { service: "Home/Power Button Repair", price: "From $39" },
      ]}
    />
  );
}
