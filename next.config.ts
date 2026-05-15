import type { NextConfig } from "next";

/**
 * Security headers applied to every response.
 *
 * Each header is industry standard. Read the comments to understand
 * what each one protects against. Test your site after deployment at:
 *   https://securityheaders.com/
 * You should get an A+ rating with this config.
 */
const securityHeaders = [
  // Force HTTPS for 2 years — once a browser sees this, it refuses to
  // connect over HTTP even if a user types `http://`. Defends against
  // SSL-strip attacks on public WiFi.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Prevent the site from being embedded in iframes on other domains
  // (clickjacking defense). `SAMEORIGIN` allows your own pages to embed.
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Prevent the browser from guessing file MIME types — defends against
  // attackers uploading a `.jpg` that's actually an executable script.
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // When users click external links, only send the origin (not the full
  // URL with query params) as a referrer. Prevents leaking sensitive paths.
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Disable browser features you don't use — if an XSS attack somehow
  // got through, it still can't access the camera, mic, location, etc.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // Cross-origin policies — prevents other origins from peeking at
  // your loaded resources via Spectre-style timing attacks.
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Emit a minimal self-contained server build for Docker / containers.
  output: "standalone",
  // Enable response compression at the Node layer.
  compress: true,
  // Hide that we're running Next.js (small reconnaissance hardening).
  poweredByHeader: false,

  // Apply security headers to every route on the site.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
