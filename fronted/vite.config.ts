import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load env variables from .env files (Vite automatically prefixes with VITE_ and NEXT_PUBLIC_)
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      // Make the API URL available at build time
      "process.env.NEXT_PUBLIC_API_URL": JSON.stringify(env.NEXT_PUBLIC_API_URL),
    },
    server: {
      port: 3000,
    },
  };
});
