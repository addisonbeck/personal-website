import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
  server: {
    port: 3000
  },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
    environment: 'happy-dom',
    alias: [{ find: /^svelte$/, replacement: 'svelte/internal' }],
    api: {
      port: 3001
    }
	},
	optimizeDeps: {
		exclude: [
			'codemirror',
			'@codemirror/autocomplete',
			'@codemirror/commands',
			'@codemirror/lang-css',
			'@codemirror/lang-html',
			'@codemirror/lang-javascript',
			'@codemirror/lang-json',
			'@codemirror/language',
			'@codemirror/state',
			'@codemirror/view'
		]
	}
});
