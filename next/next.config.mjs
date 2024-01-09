/**
 * @type {import('next').NextConfig}
 * */
export default {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    reactRemoveProperties: true,
  },

  swcMinify: true,

  experimental: {
    typedRoutes: true,
  },

  trailingSlash: true,
};
