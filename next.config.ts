import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  skipTrailingSlashRedirect: true
};

export default nextConfig;
