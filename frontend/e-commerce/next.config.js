/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['d3ugyf2ht6aenh.cloudfront.net', 'i.pravatar.cc'],
  },
}

module.exports = nextConfig
