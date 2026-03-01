import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    domains: ['i.ibb.co', 'images.unsplash.com'],
  },
};

export default nextConfig;
