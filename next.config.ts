import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default withPWA({
  ...nextConfig,
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
});