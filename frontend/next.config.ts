import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use 'standalone' output for Cloudflare Pages with @cloudflare/next-on-pages
  output: "standalone",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
