const extract = require('./extract-excerpt');

test('extracts first paragraph', () => {
  const post = {
    templateContent: '<p>first</p><p>second</p>'
  };

  const result = extract(post);

  expect(result).toBe('<p>first</p>');
});
