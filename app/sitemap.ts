import type { MetadataRoute } from "next";
import { industryList } from "@/lib/industry-config";

const BASE_URL = "https://bookzync.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  // Static marketing pages
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: today, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/pricing`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/faq`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: today, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy`, lastModified: today, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: today, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/refund-policy`, lastModified: today, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Industry landing pages
  const industryRoutes: MetadataRoute.Sitemap = industryList.map((ind) => ({
    url: `${BASE_URL}/industry/${ind.key}`,
    lastModified: today,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Demo sites — list every page across all 8 demos so search can index examples
  const demoRoutes: MetadataRoute.Sitemap = [
    // Dental
    ...["", "/services", "/about"].map((sub) => ({
      url: `${BASE_URL}/demos/dental/modern-clinic${sub}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...["", "/services", "/team"].map((sub) => ({
      url: `${BASE_URL}/demos/dental/family-smiles${sub}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    // Medical
    ...["", "/services", "/providers"].map((sub) => ({
      url: `${BASE_URL}/demos/medical/primary-care${sub}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...["", "/conditions", "/physicians"].map((sub) => ({
      url: `${BASE_URL}/demos/medical/specialty-clinic${sub}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    // Salon
    ...["", "/services", "/team"].map((sub) => ({
      url: `${BASE_URL}/demos/salon/modern-salon${sub}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...["", "/services", "/brides"].map((sub) => ({
      url: `${BASE_URL}/demos/salon/bridal-studio${sub}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    // Gym
    ...["", "/classes", "/coaches"].map((sub) => ({
      url: `${BASE_URL}/demos/gym/boutique-fitness${sub}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...["", "/classes", "/membership"].map((sub) => ({
      url: `${BASE_URL}/demos/gym/full-gym${sub}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];

  return [...staticRoutes, ...industryRoutes, ...demoRoutes];
}
