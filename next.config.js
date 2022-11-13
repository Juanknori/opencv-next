/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path:false, "crypto": false, process: false  };
    return config;
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
}