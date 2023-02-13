/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const Dotenv = require("dotenv-webpack");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPlugins([withBundleAnalyzer], {
  compress: true, // compression plugin 대체
  webpack(config, { webpack }) {
    const prod = process.env.NEXT_PUBLIC_TEST === "production";
    const plugins = [
      ...config.plugins,
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
      new Dotenv({ silent: true }),
    ];
    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "hidden-source-map" : "eval",
      module: {
        ...config.module,
        rules: [...config.module.rules],
      },
      plugins,
    };
  },
});
