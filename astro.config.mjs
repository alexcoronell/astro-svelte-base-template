import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import min from "astro-min";

function minExcludeSvelte() {
  const minPlugin = min();

  return {
    ...minPlugin,
    name: "min-exclude-svelte",
    hooks: {
      ...minPlugin.hooks,
      "astro:build:done": async (options) => {
        // Interceptor minification process
        const originalFiles = options.dir;

        // Get all file
        const { readdir, readFile, writeFile } = await import("fs/promises");
        const { join } = await import("path");

        // Create backup of Svelte files before minification
        const svelteFiles = [];
        const assetsDir = join(originalFiles.pathname, "_astro");

        try {
          const files = await readdir(assetsDir);

          for (const file of files) {
            if (
              file.includes("svelte") ||
              file.match(/\w+\.[a-zA-Z0-9]{8}\.js$/)
            ) {
              const filePath = join(assetsDir, file);
              const content = await readFile(filePath, "utf-8");

              // Detect if it is a Svelte file by its content
              if (content.includes("svelte") || content.includes("$$self")) {
                svelteFiles.push({ path: filePath, content });
              }
            }
          }
        } catch (error) {
          console.warn("Svelte files could not be verified:", error);
        }

        // Execute original minification
        if (minPlugin.hooks?.["astro:build:done"]) {
          await minPlugin.hooks["astro:build:done"](options);
        }

        // Restore original Svelte files
        for (const file of svelteFiles) {
          await writeFile(file.path, file.content, "utf-8");
          console.log(`✓ Svelte file preserved: ${file.path}`);
        }
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://comain.com",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  integrations: [
    svelte(),
    sitemap(),
    minExcludeSvelte(),
    compressor({ gzip: true, brotli: true }),
  ],
});
