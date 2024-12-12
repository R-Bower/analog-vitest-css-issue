/// <reference types="vitest" />
import angular from "@analogjs/vite-plugin-angular"
import {defineConfig} from "vite"

export default defineConfig(({mode}) => ({
  define: {
    "import.meta.vitest": mode !== "production",
  },
  plugins: [angular()],
  test: {
    browser: {
      enabled: true,
      headless: false,
      name: "chromium",
      provider: "playwright",
    },
    globals: true,
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    setupFiles: ["src/test-setup.ts"],
  },
}))
