import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@handlers': resolve(__dirname, './src/handlers'),
      '@views': resolve(__dirname, './src/views'),
      '@components': resolve(__dirname, './src/views/components'),
      '@shared': resolve(__dirname, './src/views/components/shared'),
      '@helpers': resolve(__dirname, './src/helpers.ts'),
      '@utils': resolve(__dirname, './src/views/utils'),
    },
  },
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'npm/vite-plugin-monkey',
        match: [" https://www3.yggtorrent.qa/*", "https://yggtorrent.qa/*"],
      },
    }),
  ],
});
