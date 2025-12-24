import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name].[ext]';
          
          // Remove 'public/' prefix if it exists
          const normalizedName = assetInfo.name.replace('public/', '');
          
          // Get the file extension
          const parts = normalizedName.split('.');
          const extType = parts[parts.length - 1];
          
          // Handle images
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            // If it's already in an images directory, maintain the path
            if (normalizedName.indexOf('images/') !== -1) {
              return normalizedName;
            }
            return `assets/images/[name].[ext]`;
          }
          
          // Handle CSS files
          if (extType === 'css') {
            if (normalizedName.indexOf('css/') !== -1) {
              return normalizedName;
            }
            return `assets/css/[name]-[hash].[ext]`;
          }
          
          // Handle JS files
          if (extType === 'js') {
            if (normalizedName.indexOf('js/') !== -1) {
              return normalizedName;
            }
            return `assets/js/[name]-[hash].[ext]`;
          }
          
          // Handle other assets
          return `assets/[name].[ext]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    }
  },
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './public/assets')
    }
  }
});
