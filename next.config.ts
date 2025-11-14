import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  experimental: {globalNotFound: true}
};

export default nextConfig;
