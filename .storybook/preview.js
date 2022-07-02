import * as nextImage from 'next/image';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import '../src/styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  /* storybookでnext/routerを使用する設定 */
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

/* storybookでnext/imageを使用する設定 */
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});
