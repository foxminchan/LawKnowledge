/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { join } from 'path';
import tailwindTypo from '@tailwindcss/typography';
import { createGlobPatternsForDependencies } from '@nx/react/tailwind';

export default {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './docs/**/*.{md,mdx}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        japonica: {
          50: '#fbf5f1',
          100: '#f6e8de',
          200: '#eccebc',
          300: '#dfad92',
          400: '#ce7a58',
          500: '#c86747',
          600: '#ba533c',
          700: '#9b4033',
          800: '#7d362f',
          900: '#652e29',
          950: '#361514',
        },
      },
      keyframes: {
        jackInTheBox: {
          '0%': { transform: 'scale(0.1) rotate(30deg)', opacity: '0' },
          '50%': { transform: 'rotate(-10deg)' },
          '70%': { transform: 'rotate(3deg)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'jack-in-the-box': 'jackInTheBox 2s ease-in-out',
      },
    },
  },
  plugins: [tailwindTypo],
  blocklist: ['container'],
};
