import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ IMPORTANT CHANGE
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
