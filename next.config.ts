import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/onvi-indian-frontend',
  assetPrefix: '/onvi-indian-frontend/',
  trailingSlash: true,
};

export default nextConfig;