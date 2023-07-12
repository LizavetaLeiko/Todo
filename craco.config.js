const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@theme': path.resolve(__dirname, 'src/theme/index'),
      '@components': path.resolve(__dirname, 'src/components/index'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces/index'),
      '@store': path.resolve(__dirname, 'src/store/index'),
    }
  },
};