import { defineConfig } from "vite";
import cssModules from "vite-plugin-css-modules";

export default defineConfig({
  plugins: [cssModules()],
  build: {
    lib: {
      entry: "./src/index.js", // Entry point for your library
      name: "WebPlay UI Library",
      fileName: (format) => `webplay-ui.${format}.js`, // Generate different files for each format
      formats: ["es", "umd"], // Export both ES module and UMD format
    },
    rollupOptions: {
      output: {
        dir: "dist", // Output directory
        format: "es", // Ensures the ES module format
        entryFileNames: "webplay-ui.es.js", // ES module output file
        assetFileNames: "webplay-ui.css", // CSS output file
      },
    },
  },
  css: {
    postcss: {
      plugins: [require("autoprefixer")],
    },
  },
});
