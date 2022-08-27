import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Toc } from './index';

export default {
  component: Toc,
} as ComponentMeta<typeof Toc>;

export const Default: ComponentStoryObj<typeof Toc> = {
  args: {
    toc: [
      { text: 'レンダリングとは', tag: 'span' },
      { text: 'Next.jsのレンダリングは？？', tag: 'h3' },
      { text: 'Next.jsとは', tag: 'span' },
      { text: 'サンプルコード', tag: 'span' },
    ],
  },
};
