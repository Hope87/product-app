/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    externalResolver: true,
  },
  images: {
    domains: ['ixbt.online', 'ap71.ru', 'assets.photar.ru'],
  },
}

module.exports = nextConfig
