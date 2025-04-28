
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    {
      name: 'copy-service-worker',
      writeBundle() {
        // Copy the service worker to dist during build
        copyFileSync(
          path.resolve(__dirname, 'src/serviceWorker.ts'),
          path.resolve(__dirname, 'dist/serviceWorker.js')
        );
        console.log('Service worker copied to dist folder');
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Add build-time caching options
    assetsInlineLimit: 4096, // Only inline assets < 4kb
    rollupOptions: {
      output: {
        // Use content hash in file names for better caching
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  }
}));
