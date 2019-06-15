# eleventy-plugin-excerpt

Eleventy plugin for extracting template excerpts

## Install

`npm install eleventy-plugin-excerpt`

Add it to your config

```js
const excerpt = require('eleventy-plugin-excerpt');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(excerpt);
};
```

## Usage

This plugin adds a [universal shortcode](https://www.11ty.io/docs/shortcodes/#universal-shortcodes) named `excerpt` which takes one argument: a template object.

### Liquid

```liquid
{%- for post in collections.post -%}
  {% excerpt post %}
{%- endfor -%}
```

### Nunjucks

```njk
{%- for post in collections.post -%}
  {% excerpt post %}
{%- endfor -%}
```

### Handlebars

```hbs
{{#each collections.post}}
  {{{ excerpt this }}}
{{/each}}
```

### JavaScript function

```js
module.exports = function({ collections }) {
  return collections.post.map(post => {
    return `<div>${this.excerpt(post)}</div>`;
  });
};
```

## Options

### excerptSeparator

Everything in the rendered template content up to and including this string becomes the excerpt.

Optional, defaults to `</p>`.

```js
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(excerpt, {
    excerptSeparator: '<!--more-->'
  });
};
```

Then you can have multi paragraph excerpts

```md
---
...
---
In the excerpt

Also in the excerpt

<!--more-->

Not in the excerpt
```

## Custom excerpt

If your template's front-matter or data file contains a property called "excerpt", that string will be used instead of extracting the excerpt from the template content.

```md
---
excerpt: 'This is the excerpt'
---

Not the excerpt
```

## License

MIT
