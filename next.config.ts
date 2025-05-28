import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // 🛑 disables blocking build due to ESLint
  },
  output: 'export',
  images: {
    unoptimized: true, // important for GH Pages
  },
  basePath: '/onvi-indian-frontend',
  assetPrefix: '/onvi-indian-frontend/',
};

export default nextConfig;
