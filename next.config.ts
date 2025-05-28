import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true, // important for GH Pages
  },
  basePath: '/onvi-indian-frontend',
  assetPrefix: '/onvi-indian-frontend/',
};

export default nextConfig;
