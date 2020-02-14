const pkg = require('./package.json');
const path = `/${pkg.name}/`;

export default {
  base: path,
  publicPath: path,
  cssPublicPath: path,
  runtimePublicPath: true,
  outputPath: 'docs',
  chainWebpack(config) {
    config.plugins.delete('progress');
  },
};
