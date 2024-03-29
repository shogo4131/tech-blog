import { withScreenshot } from 'storycap';

import '../src/styles/globals.css';
import 'destyle.css';

export const decorators = [withScreenshot];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
