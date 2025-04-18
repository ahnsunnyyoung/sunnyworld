/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
  images: {
    unoptimized: false,
    domains: ['localhost'],
  },
}

module.exports = nextConfig
