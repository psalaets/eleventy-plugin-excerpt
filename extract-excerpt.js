module.exports = function create(options = {}) {
  const excerptSeparator = options.excerptSeparator || '</p>';

  return function extractExcerpt(post) {
    if (post.data && post.data.excerpt) {
      return post.data.excerpt;
    }

    const index = post.templateContent.indexOf(excerptSeparator);

    if (index != -1) {
      return post.templateContent.slice(0, index + excerptSeparator.length);
    } else {
      return '';
    }
  };
};
