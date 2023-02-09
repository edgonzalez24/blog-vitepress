import fs from 'node:fs/promises';
import matter from 'gray-matter';
import removeMd from 'remove-markdown';

const articles = await fs.readdir('./blog/');

const data = await Promise.all(
  articles.map(async (article) => {
    const file = matter.read(`./blog/${article}`, {
      excerpt: true,
      excerpt_separator: ''
    });

    const { data, content, path } = file;
    const contents = removeMd(content).trim().split(/\r\n|\n|\r/);

    return {
      ...data,
      title: contents[0].replace(/\s{2,}/g, '').trim(),
      path: path.replace(/\.md$/, '.html'),
      description: contents.slice(1).join('').replace(/\s{2,}/g, '').trim().substring(0, 300) + '...'
    }
  })
)

await fs.writeFile('./data.json', JSON.stringify(data), 'utf-8');