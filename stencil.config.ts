import { Config } from '@stencil/core';
import { sass } '@stencil/sass';

export const config: Config = {
  namespace: 'components-library-with-scss',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [sass()]
};
