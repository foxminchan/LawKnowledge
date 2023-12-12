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
      },
    },
  },
  plugins: [tailwindTypo],
};
