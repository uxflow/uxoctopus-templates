const withImages = require('next-images');

/**
 * @type {import('next').NextConfig}
 * */
module.exports = withImages({
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: true,
  },

  swcMinify: true,

  trailingSlash: true,
});
