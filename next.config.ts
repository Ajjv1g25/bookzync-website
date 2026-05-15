import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Emit a minimal self-contained server build for Docker / containers.
  // Has no effect on Vercel or DigitalOcean App Platform — they ignore it.
  output: "standalone",
  // Enable response compression at the Node layer (free perf win)
  compress: true,
  // Strict referrer policy — don't leak full URLs to other origins
  poweredByHeader: false,
};

export default nextConfig;
