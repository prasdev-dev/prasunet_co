import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  webpack: {
    externals: {
      "pg": "pg",
      "@prisma/client": "@prisma/client",
    },
  },
};

export default nextConfig;