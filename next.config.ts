import { NextConfig } from 'next';
import withPWA from 'next-pwa';
import { GenerateSW } from 'workbox-webpack-plugin';

const pwaConfig = {
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(
        new GenerateSW({
          mode: 'production',
          clientsClaim: true,
          skipWaiting: true,
        })
      );
    }
    return config;
  },
};
const withPWAConfig = withPWA(pwaConfig);

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  ...nextConfig,
  ...withPWAConfig,
}