import { IndustryPage } from "@/components/industry/industry-page";

export const metadata = {
  title: "BookZync for Salons & Studios",
  description:
    "AI chat assistant for salons and studios: capture every DM, match clients to stylists, book bookings 24/7 — across your website, Instagram, and SMS.",
};

export default function ForSalonPage() {
  return <IndustryPage industry="salon" />;
}
