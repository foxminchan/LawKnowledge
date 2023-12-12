import { join } from 'path';
import tailwindTypo from '@tailwindcss/typography';
import { createGlobPatternsForDependencies } from '@nx/react/tailwind';

export default {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
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
        'white-smoke': {
          50: '#ffffff',
          100: '#f5f5f5',
          200: '#ebebeb',
          300: '#e1e1e1',
          400: '#d8d8d8',
          500: '#cecece',
          600: '#c4c4c4',
          700: '#bababa',
          800: '#b0b0b0',
          900: '#a7a7a7',
          950: '#9d9d9d',
        },
      },
    },
  },
  plugins: [tailwindTypo],
};
