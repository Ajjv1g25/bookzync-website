import { IndustryPage } from "@/components/industry/industry-page";

export const metadata = {
  title: "BookZync for Medical Practices",
  description:
    "AI chat assistant for medical practices: capture every patient inquiry, route correctly, book appointments 24/7 — across your website, social DMs, and SMS.",
};

export default function ForMedicalPage() {
  return <IndustryPage industry="medical" />;
}
