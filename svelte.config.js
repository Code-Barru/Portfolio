import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { escapeSvelte, mdsvex } from 'mdsvex';
import { getHighlighter } from 'shiki';

import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';


/** @type {import('mdsvex').MdsvexOptions} */

const MdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highligther = await getHighlighter({
				themes: ['poimandres'],
				
				langs: ['javascript', 'typescript', 'rust']
			});

			// await highligther.loadTheme('nord');
			// await highligther.loadLanguage('javascript', 'typescript', 'rust');

			const html = escapeSvelte(highligther.codeToHtml(code, {
				lang, 
				theme: 'poimandres',
			}));
			return `{@html \`${html}\`}`
		}
	},
	remarkPlugins: [remarkUnwrapImages, remarkToc],
	rehypePlugins: [rehypeSlug],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(MdsvexOptions)],

	kit: {
		adapter: adapter()
	}
};

export default config;
