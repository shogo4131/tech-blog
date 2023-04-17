import { Meta, StoryObj } from '@storybook/react';

import { Toc } from './index';

export default {
  component: Toc,
} as Meta<typeof Toc>;

export const Default: StoryObj<typeof Toc> = {
  args: {
    toc: [
      { id: 0, text: 'レンダリングとは', tag: 'span' },
      { id: 1, text: 'Next.jsのレンダリングは？？', tag: 'h3' },
      { id: 2, text: 'Next.jsとは', tag: 'span' },
      { id: 3, text: 'サンプルコード', tag: 'span' },
    ],
  },
};
