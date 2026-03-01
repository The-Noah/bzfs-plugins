import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? "" : "/bzfs-plugins"
    },
    alias: {
      $styles: "./src/styles"
    }
  },
  preprocess: vitePreprocess()
};

export default config;
