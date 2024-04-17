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
      exclude: /sanity/,
      loader: "ignore-loader",
    });
    return config;
  },
};

export default nextConfig;
