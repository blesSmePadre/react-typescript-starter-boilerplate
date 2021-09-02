import config from '../config';

export type Head = {
  base: string;
  script: string;
  link: string;
  meta: string;
  title: string;
  htmlAttributes: string;
};

export default (title: string = config.app.title): Head => ({
  base: '',
  script: '',
  link: config.app.link
    .map(({ rel, href }) => `<meta rel="${rel}" content="${href}">`)
    .join('\n'),
  meta: config.app.meta
    .map(({ name, content }) => `<meta name="${name}" content="${content}">`)
    .join('\n'),
  title: `<title>${title}</title>`,
  htmlAttributes: Object.keys(config.app.htmlAttributes).reduce(
    (acc, key) =>
      `${acc} ${key} = "${
        (config.app.htmlAttributes as Record<string, string>)[key]
      }"`,
    ''
  ),
});
