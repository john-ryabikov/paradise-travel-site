import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/404',
        has: [{ type: 'header', key: 'x-not-found', value: 'true' }]
      }
    ];
  }
};

export default nextConfig;
