/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', "cdn.pixabay.com"],
  },
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig
