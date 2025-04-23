import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  devIndicators: false,
  images: {
    remotePatterns: [new URL('https://imageplaceholder.net/720x720')],
  },
};

export default nextConfig;
