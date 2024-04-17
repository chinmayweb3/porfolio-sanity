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
      use: {
        loader: "babel-loader", // Use Babel loader
        options: {
          presets: ["next/babel"],
        },
      },
    });
    return config;
  },
};

export default nextConfig;
