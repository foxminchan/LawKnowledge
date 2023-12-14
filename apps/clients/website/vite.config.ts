import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import { PluginOption, defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

const manifestForPlugIn: Partial<VitePWAOptions> = {
  registerType: 'prompt' as const,
  includeAssets: [
    'favicon.ico',
    'icon-192x192.png',
    'icon-256x256.png',
    'icon-384x384.png',
    'icon-512x512.png',
  ],
  manifest: {
    theme_color: '#c86747"',
    background_color: '#c86747',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    name: 'Tri Thức Pháp Luật',
    short_name: 'Tri Thức Pháp Luật',
    orientation: 'portrait',
    description:
      'Ứng dụng tìm kiếm kiến thức pháp luật và hỏi đáp dựa trên cơ sở dữ liệu Bộ luật và văn bản quy phạm pháp luật của Việt Nam',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  injectRegister: null,
  minify: true,
  workbox: {
    clientsClaim: true,
    skipWaiting: true,
  },
  includeManifestIcons: false,
  disable: false,
};

export default defineConfig({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/apps/clients/website',

  server: {
    port: 4200,
    host: 'localhost',
    open: true,
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    visualizer() as PluginOption,
    react(),
    nxViteTsPaths(),
    VitePWA(manifestForPlugIn),
  ],

  build: {
    minify: true,
    modulePreload: false,
    outDir: '../../../dist/apps/clients/website',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },

  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: '@assets',
        replacement: fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
      {
        find: '@components',
        replacement: fileURLToPath(
          new URL('./src/components', import.meta.url),
        ),
      },
      {
        find: '@layouts',
        replacement: fileURLToPath(new URL('./src/layouts', import.meta.url)),
      },
      {
        find: '@common',
        replacement: fileURLToPath(new URL('./src/common', import.meta.url)),
      },
      {
        find: '@mocks',
        replacement: fileURLToPath(new URL('./src/mocks', import.meta.url)),
      },
      {
        find: '@features',
        replacement: fileURLToPath(new URL('./src/features', import.meta.url)),
      },
    ],
  },

  test: {
    globals: true,
    cache: {
      dir: '../../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../../coverage/apps/clients/website',
      provider: 'v8',
    },
  },
});
