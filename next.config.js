/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  ignoreBuildErrors: true,
};

module.exports = withBundleAnalyzer({
  nextConfig,
});
