import sveltePreprocess from "svelte-preprocess";
import adapterStatic from "@sveltejs/adapter-static"
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
	kit: {
	adapter: adapterStatic()
	},
  preprocess: [
    sveltePreprocess({
      postcss: true,
    }),
  ],
};
