import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Enable minification (esbuild is faster and built-in)
    minify: 'esbuild',
    // Code splitting configuration
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Supabase in separate chunk (only loaded when needed)
          'vendor-supabase': ['@supabase/supabase-js'],
        },
      },
    },
    // Improve chunk size warnings threshold
    chunkSizeWarningLimit: 500,
    // Enable source maps for production debugging (optional, can disable for smaller builds)
    sourcemap: false,
    // Target modern browsers for smaller bundles
    target: 'es2020',
  },
})
