import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess'
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import { preprocessMeltUI } from '@melt-ui/pp';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
  	  preprocess(),
  	  vitePreprocess(),
  	  preprocessMeltUI(),
  	],

	kit: {
		adapter: adapter()
	}
};

export default config;