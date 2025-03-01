import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index", // Redirect /admin to /admin/index.tsx
      },
    ];
  },
};

export default nextConfig;
