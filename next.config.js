/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cloudinary.images-iherb.com",
      },
      {
        protocol: "https",
        hostname: "www.gosupps.com",
      },
      {
        protocol: "https",
        hostname: "muscleup.pk",
      },
      {
        protocol: "https",
        hostname: "www.bravonutrition.pk",
      },
    ],
  },
};

module.exports = nextConfig;
