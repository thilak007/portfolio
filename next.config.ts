import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker deployment
  output: "standalone",
  
  // Optimize images
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'leetcard.jacoblin.cool',
      },
      {
        protocol: 'https',
        hostname: 'github.r2v.ch',
      },
      {
        protocol: 'https',
        hostname: 'streak-stats.demolab.com',
      },
    ],
  },
  
  // Minify output
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
