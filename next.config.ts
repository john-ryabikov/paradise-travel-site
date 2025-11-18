import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}

export default nextConfig
