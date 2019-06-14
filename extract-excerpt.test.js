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

describe('with excerpt separator option', () => {
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

describe('with excerpt in front-matter', () => {
  test('uses excerpt from front-matter', () => {
    const extract = create();
    const post = {
      data: {
        excerpt: 'from front-matter'
      },
      templateContent: `<p>first</p>`
    };

    const result = extract(post);

    expect(result).toBe('from front-matter');
  });
});
