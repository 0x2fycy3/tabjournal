const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/tabjournal/" : "",
  basePath: isProd ? "/tabjournal" : "",
  output: "export",
};

export default nextConfig;
