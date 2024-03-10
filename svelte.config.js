import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
			  alias: {
				$pub: path.resolve("./src/public"),
				$lib: path.resolve("./src/lib")
			  }
			}
		}
	}
};

export default config;
