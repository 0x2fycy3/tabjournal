/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/tabjournal",
  assetPrefix: "/tabjournal/",
};

module.exports = nextConfig;
