/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    optimizeCss: false,
  },
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
}

module.exports = nextConfig
