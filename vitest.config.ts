import { defineConfig } from "vitest/config";
import { svelteTesting } from "@testing-library/svelte/vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

export default defineConfig({
  plugins: [svelteTesting(), svelte()],
  test: {
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,ts}"],
    globals: true,
    clearMocks: true,
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: {
      $lib: resolve(__dirname, "./src/lib"),
      "@": resolve(__dirname, "./src"),
    },
  },
});
