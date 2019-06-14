const create = require('./extract-excerpt');

module.exports = {
  configFunction(eleventyConfig, options) {
    eleventyConfig.addShortCode('excerpt', create(options));
  }
};
