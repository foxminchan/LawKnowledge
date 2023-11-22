import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

const manifestForPlugIn: Partial<VitePWAOptions> = {
  registerType: 'prompt' as const,
  includeAssets: [
    'favicon.ico',
    'android-icon-36x36.png',
    'android-icon-48x48.png',
    'android-icon-72x72.png',
    'android-icon-96x96.png',
    'android-icon-144x144.png',
    'android-icon-192x192.png',
  ],
  manifest: {
    theme_color: '#b97a58',
    background_color: '#b97a58',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    name: 'Tri Thức Pháp Luật',
    short_name: 'Tri Thức Pháp Luật',
    orientation: 'portrait',
    description:
      'Ứng dụng tìm kiếm kiến ​​thức pháp luật và hỏi đáp dựa trên cơ sở dữ liệu Bộ luật và văn bản quy phạm pháp luật của Việt Nam',
    icons: [
      {
        src: '/android-icon-36x36.png',
        sizes: '36x36',
        type: 'image/png',
      },
      {
        src: '/android-icon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/android-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: '/android-icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/android-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/android-icon-192x192.png',
        sizes: '192x192',
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
  cacheDir: '../../node_modules/.vite/website',

  server: {
    port: 4200,
    host: 'localhost',
    open: true,
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        '..',
        'node_modules/slick-carousel/slick/fonts',
      ],
    },
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [react(), nxViteTsPaths(), VitePWA(manifestForPlugIn)],

  build: {
    minify: true,
    modulePreload: false,
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
          new URL('./src/components', import.meta.url)
        ),
      },
      {
        find: '@common',
        replacement: fileURLToPath(new URL('./src/common', import.meta.url)),
      },
      {
        find: '@mocks',
        replacement: fileURLToPath(new URL('./src/mocks', import.meta.url)),
      },
    ],
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
