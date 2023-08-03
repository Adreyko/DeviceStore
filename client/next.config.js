/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_S3: process.env.NEXT_PUBLIC_S3URL,
  },
  images: {
    domains: ["https://andriydevices.s3.eu-central-1.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
