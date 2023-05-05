/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    domains: ["images.unsplash.com", "st2.depositphotos.com", "mir-s3-cdn-cf.behance.net"],
  },
};

module.exports = nextConfig;
