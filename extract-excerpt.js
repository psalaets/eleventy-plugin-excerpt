module.exports = function create(options = {}) {
  const excerptSeparator = options.excerptSeparator || '</p>';

  return function extractExcerpt(post) {
    const index = post.templateContent.indexOf(excerptSeparator);

    if (index != -1) {
      return post.templateContent.slice(0, index + excerptSeparator.length);
    }
  };
};
