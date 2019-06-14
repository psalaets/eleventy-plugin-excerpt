const create = require('./extract-excerpt');

describe('default usage', () => {
  test('extracts first paragraph', () => {
    const extract = create();
    const post = {
      templateContent: `<p>first</p>
<p>second</p>`
    };

    const result = extract(post);

    expect(result).toBe('<p>first</p>');
  });
});

describe('with custom excerpt separator', () => {
  test('extracts up to and including separator', () => {
    const extract = create({ excerptSeparator: '<!-- more -->' });
    const post = {
      templateContent: `<p>first</p>
<p>second</p>
<!-- more -->
<p>third</p>`
    };

    const result = extract(post);

    expect(result).toBe(`<p>first</p>
<p>second</p>
<!-- more -->`);
  });

  test('extracts nothing if separator not found', () => {
    const extract = create({ excerptSeparator: 'asdf' });
    const post = {
      templateContent: `<p>first</p>`
    };

    const result = extract(post);

    expect(result).toBe('');
  });
});
