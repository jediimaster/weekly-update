import { readFile } from 'fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';
import path from 'path';


export default async function ReadMarkdownPage(filename) {
    const relativePath = '\posts';
    const fullPath = path.join(relativePath, filename);
    const source = await readFile(fullPath.toString(), 'utf8');
    // Parse the front matter and content from the file
    const { data, content } = matter(source);
    const html = marked(content)
    return {
        title: data.title,
        date: new Date(data.date.toISOString()).toDateString(),
        author: data.author,
        content: html,
    }
}