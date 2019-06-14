const extractExcerpt = require('./extract-excerpt');

module.exports = function(eleventyConfig) {
  eleventyConfig.addShortCode('excerpt', extractExcerpt);
};
