module.exports = function create(options = {}) {
  const excerptSeparator = options.excerptSeparator || '</p>';

  checkExcerptSeparator(excerptSeparator);

  return function extractExcerpt(template) {
    checkTemplate(template);

    if (template.data && template.data.excerpt) {
      return template.data.excerpt;
    }

    checkTemplateContent(template.templateContent);

    const index = template.templateContent.indexOf(excerptSeparator);
    return index !== -1
      ? template.templateContent.slice(0, index + excerptSeparator.length)
      : '';
  };
};

function checkExcerptSeparator(separator) {
  if (typeof separator !== 'string') {
    throw new Error('excerptSeparator must be a string but was: ' + separator);
  }
}

function checkTemplate(template) {
  if (!template) {
    throw new Error('template is required');
  }
}

function checkTemplateContent(templateContent) {
  if (typeof templateContent !== 'string') {
    throw new Error('template content must be a string but was: ' + templateContent);
  }
}
