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
        hostname: "storefront.saleor.io",
      },
    ],
  },
  env: {
    MONGO_URL: process.env.MONGO_URL,
    LOCAL_URL: process.env.LOCAL_URL,
  },
};

export default nextConfig;
