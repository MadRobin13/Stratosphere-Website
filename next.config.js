/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false, // Using pages router for simpler migration
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig