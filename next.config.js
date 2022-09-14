/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    additionalData: `@use './styles/config/partials/_index.scss' as *;`,
  },
};

module.exports = nextConfig;
