import { vitePreprocess } from "@astrojs/svelte";

export default {
  preprocess: vitePreprocess({
    scss: {},
    defaults: {
      style: "postcss",
    },
    markHotUpdate: true,
    compilerOptions: {
      typescript: {
        sourceMap: true,
        noEmit: true,
      },
    },
  }),
};
