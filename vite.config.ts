import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";

export default defineConfig(() => {
  return {
    build: {
      target: "es2020",
      lib: {
        entry: [
          "./src/20/solid/index.ts",
          "./src/24/outline/index.ts",
          "./src/24/solid/index.ts",
        ],
        formats: ["es", "cjs"],
        fileName: (format, entryName) => {
          if (format === "es") {
            return `${entryName}.mjs`;
          }

          return `${entryName}.cjs`;
        },
      },
      rollupOptions: {
        output: {
          preserveModules: true,
        },
      },
    },
    plugins: [qwikVite()],
  };
});
