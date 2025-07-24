import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.fly.storage.tigris.dev",
        port: "",
      },
    ],
  },
};

export default nextConfig;
