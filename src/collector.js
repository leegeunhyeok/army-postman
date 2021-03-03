const Parser = require('rss-parser');
const parser = new Parser();
const sources = require('../source/target.json');

const MAX_LENGTH = 1490; // MAX 1500
const template = `[{@title}]
{@content}`;

module.exports = async function () {
  let contents = [];
  for (const rss of sources) {
    const feed = await parser.parseURL(rss);
    const feedContentList = feed.items.map(({ title, content, summary }) => {
      content = content.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/gi, '');
      const parsedContent = template
        .replace('{@title}', title)
        .replace('{@content}', content);

      return parsedContent;
    });

    contents = [...contents, ...feedContentList];
  }

  return (
    contents
      .sort(() => Math.random() - 0.5)
      .join('<br><br>')
      .substr(0, MAX_LENGTH) + '...'
  );
};
