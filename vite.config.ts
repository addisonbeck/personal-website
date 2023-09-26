import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
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
