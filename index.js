const create = require('./extract-excerpt');

module.exports = {
  configFunction(eleventyConfig, options) {
    eleventyConfig.addShortcode('excerpt', create(options));
  }
};
