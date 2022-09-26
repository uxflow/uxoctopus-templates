/**
 * @type {import('next').NextConfig}
 * */
export default ({
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: true,
  },

  swcMinify: true,

  trailingSlash: true,
});
