import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { ViteAliases } from 'vite-aliases';

export default defineConfig({
	plugins: [
		react(),
		ViteAliases({
			prefix: '@',
			useConfig: true,
			depth: 0,
		}),
	],
	server: {
		port: 3000,
		open: '/',
	},
	esbuild: {
		drop: ['console', 'debugger'],
	},
});
