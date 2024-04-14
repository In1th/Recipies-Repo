import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess'
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import {mdsvex} from 'mdsvex';
import { preprocessMeltUI } from '@melt-ui/pp';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md']
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
    preprocess(),
    vitePreprocess(),
    preprocessMeltUI(),
    mdsvex(mdsvexOptions)
  ],

	kit: {
		adapter: adapter()
	}
};

export default config;