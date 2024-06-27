import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

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
			'/p6': 'http://localhost:80'
		}
	},
	preview: {
		port: 80
	},
	plugins: [sveltekit()],
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

