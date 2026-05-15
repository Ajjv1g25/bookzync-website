import type { MetadataRoute } from "next";

const BASE_URL = "https://bookzync.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Demo sites are public examples — fine to index. Nothing internal to hide.
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
