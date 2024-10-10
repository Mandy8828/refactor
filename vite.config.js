import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/icon")],
      symbolId: "icon-[name]",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
