/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /sanity\//, // Adjust this regex to match your folder
      use: "ignore-loader",
    });
    return config;
  },
};

export default nextConfig;
