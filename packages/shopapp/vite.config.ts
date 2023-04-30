import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@dtest/itemslist": path.resolve(__dirname, "../itemslist/src"),
      "@dtest/cart": path.resolve(__dirname, "../cart/src/"),
      "@dtest/floatingcart": path.resolve(__dirname, "../floatingcart/src"),
      "@dtest/storemodule": path.resolve(__dirname, "../storemodule/src"),
    },
  },
  plugins: [react()],
});
