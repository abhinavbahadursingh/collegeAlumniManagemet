import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // listen on all network interfaces
    port: 8080,
    allowedHosts: ["collegealumnimanagemet.onrender.com"], // ✅ Add this line
  },
  plugins: [react(), /* mode === "development" && componentTagger() */].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
