import { Meta, StoryObj } from '@storybook/react';

import { BreadCrumb } from './index';

export default {
  component: BreadCrumb,
} as Meta<typeof BreadCrumb>;

export const Default: StoryObj<typeof BreadCrumb> = {
  args: {
    items: [
      { id: 1, label: 'トップ', href: '/' },
      { id: 2, label: 'センター', href: '/center' },
      { id: 3, label: 'ラスト' },
    ],
  },
};
