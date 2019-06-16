const create = require('./extract-excerpt');

describe('default usage', () => {
  test('extracts first paragraph', () => {
    const extract = create();
    const template = {
      templateContent: `<p>first</p>
<p>second</p>`
    };

    const result = extract(template);

    expect(result).toBe('<p>first</p>');
  });
});

describe('with empty options object', () => {
  test('extracts first paragraph', () => {
    const extract = create({});
    const template = {
      templateContent: `<p>first</p>
<p>second</p>`
    };

    const result = extract(template);

    expect(result).toBe('<p>first</p>');
  });
});

describe('with excerpt separator option', () => {
  test('extracts up to and including separator', () => {
    const extract = create({ excerptSeparator: '<!-- more -->' });
    const template = {
      templateContent: `<p>first</p>
<p>second</p>
<!-- more -->
<p>third</p>`
    };

    const result = extract(template);

    expect(result).toBe(`<p>first</p>
<p>second</p>
<!-- more -->`);
  });

  test('extracts nothing if separator not found', () => {
    const extract = create({ excerptSeparator: 'asdf' });
    const template = {
      templateContent: `<p>first</p>`
    };

    const result = extract(template);

    expect(result).toBe('');
  });
});

describe('with excerpt in template data', () => {
  test('uses excerpt from template data', () => {
    const extract = create();
    const template = {
      data: {
        excerpt: 'from template data'
      },
      templateContent: `<p>first</p>`
    };

    const result = extract(template);

    expect(result).toBe('from template data');
  });
});

describe('error cases', () => {
  test('throws Error when template content does not exist', () => {
    const extract = create();
    const template = {};

    expect(() => {
      extract(template);
    }).toThrow('template content must be a string but was: undefined');
  });

  test('throws Error when template content is not a string', () => {
    const extract = create();
    const template = {
      templateContent: 5
    };

    expect(() => {
      extract(template);
    }).toThrow('template content must be a string but was: 5');
  });

  test('throws Error when template object not passed', () => {
    const extract = create();

    expect(() => {
      extract();
    }).toThrow('template is required');
  });

  test('throws Error when excerpt separator is specified but is not a string', () => {
    expect(() => {
      create({ excerptSeparator: 3 });
    }).toThrow('excerptSeparator must be a string but was: 3');
  });
});
