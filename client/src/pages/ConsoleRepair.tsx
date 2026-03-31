import ServicePage from "@/components/ServicePage";
import { Gamepad2 } from "lucide-react";

const CONSOLE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485897224/MofiVVvCY2VNzcivHq9rXM/console-repair-iFyDZd48TPFJ7LiCP4nRa4.webp";

export default function ConsoleRepair() {
  return (
    <ServicePage
      title="Console Repair"
      subtitle="PlayStation, Xbox, and Nintendo Switch repair. HDMI ports, disc drives, overheating, and controller drift — all fixed in-house."
      heroImage={CONSOLE_IMG}
      icon={<Gamepad2 className="w-4 h-4" />}
      description="Game consoles are complex machines, and when they break, you need a repair shop that understands the hardware inside and out. PhoneClinic in Tuscaloosa offers professional repair services for PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, and Nintendo Switch consoles. Our technicians specialize in HDMI port replacement, disc drive repair, thermal paste reapplication, and power supply fixes."
      description2="One of the most common console repairs we perform is HDMI port replacement — a delicate soldering job that requires precision equipment and steady hands. We also handle Joy-Con drift repair for Nintendo Switch, controller stick replacement, and fan cleaning for overheating consoles. Every repair comes with our standard warranty, and we offer free diagnostics so you know exactly what is wrong before committing to a repair."
      features={[
        "PlayStation 4 and PS5 repair",
        "Xbox One and Series X/S repair",
        "Nintendo Switch and Switch OLED",
        "HDMI port replacement",
        "Disc drive repair and replacement",
        "Thermal paste reapplication",
        "Power supply repair",
        "Joy-Con drift and controller repair",
      ]}
      pricing={[
        { service: "HDMI Port Replacement (PS5)", price: "From $99" },
        { service: "HDMI Port Replacement (PS4/Xbox)", price: "From $79" },
        { service: "Disc Drive Repair", price: "From $69" },
        { service: "Thermal Paste Reapplication", price: "From $49" },
        { service: "Joy-Con Drift Repair", price: "From $35" },
        { service: "Power Supply Repair", price: "From $59" },
      ]}
    />
  );
}
