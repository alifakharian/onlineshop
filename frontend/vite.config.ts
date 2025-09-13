import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/onlineshop/",
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000", // دوباره localhost
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
