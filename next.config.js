/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  ignoreBuildErrors: true,
  swcMinify: false,
  target: 'serverless',
};

module.exports = nextConfig;
