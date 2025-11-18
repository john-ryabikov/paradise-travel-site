import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  async generateStaticParams() {
    return {'/404': { page: '/404' }}
  }
}

export default nextConfig
