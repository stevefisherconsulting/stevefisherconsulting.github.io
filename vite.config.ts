import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // This is important for custom domain support
  plugins: [react()],
  optimizeDeps: {
    exclude: ["bippy/dist/jsx-dev-runtime", "bippy/dist/jsx-runtime"],
  },
});
