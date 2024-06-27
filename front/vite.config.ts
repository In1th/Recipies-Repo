import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import proxy from './src/proxy';

export default defineConfig({
	server: {
		port: 3000,
		host: true,
		strictPort: true,
		hmr: {
			port: 3010
		},
		watch: {
			usePolling: true
		},
		proxy: {
			'/p6': {
				target: 'http://localhost:3000',
				rewrite(path) {
					return path.replace(/^\/p6/, '');
				},
			}
		}
	},
	preview: {
		port: 80
	},
	plugins: [sveltekit(), proxy],
	// optimizeDeps: {
	// 	exclude: ['fs', 'node:fs']
	// },
	// resolve: {
	// 	alias: [
	// 		{
    //     	  find: 'fs',
    //     	  replacement: 'memfs',
    //     	},
	// 	]
	// }
});

