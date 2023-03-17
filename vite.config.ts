import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "src/styles/mixins.scss";'
			}
		}
	},
	plugins: [
		sveltekit(),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
