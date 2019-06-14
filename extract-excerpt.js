module.exports = function extractExcerpt(post) {
  const excerptSeparator = '</p>';
  const index = post.templateContent.indexOf(excerptSeparator);

  if (index != -1) {
    return post.templateContent.slice(0, index + excerptSeparator.length);
  }
};
