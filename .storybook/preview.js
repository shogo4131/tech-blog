import { RouterContext } from 'next/dist/shared/lib/router-context';
import '../src/styles/globals.css';
import 'ress';

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
