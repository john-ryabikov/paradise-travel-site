import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
};

export default nextConfig;
