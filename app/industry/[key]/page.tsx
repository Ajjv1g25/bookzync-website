import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { IndustryPage } from "@/components/industry/industry-page";
import { industries, type IndustryKey } from "@/lib/industry-config";

const industryKeys: IndustryKey[] = ["dental", "medical", "salon", "gym"];

export function generateStaticParams() {
  return industryKeys.map((key) => ({ key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ key: string }>;
}): Promise<Metadata> {
  const { key } = await params;
  if (!industryKeys.includes(key as IndustryKey)) {
    return { title: "Industry not found" };
  }
  const cfg = industries[key as IndustryKey];
  return {
    title: `BookZync for ${cfg.displayName}`,
    description: `AI chat assistant for ${cfg.displayName.toLowerCase()}: capture every lead, qualify in seconds, book ${cfg.terms.bookingPlural} 24/7 — across your website, social DMs, and SMS.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  if (!industryKeys.includes(key as IndustryKey)) {
    notFound();
  }
  return <IndustryPage industry={key as IndustryKey} />;
}
