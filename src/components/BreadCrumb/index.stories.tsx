import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { BreadCrumb } from './index';

export default {
  component: BreadCrumb,
} as ComponentMeta<typeof BreadCrumb>;

export const Default: ComponentStoryObj<typeof BreadCrumb> = {
  args: {
    items: [
      { id: 1, label: 'トップ', href: '/' },
      { id: 2, label: 'センター', href: '/center' },
      { id: 3, label: 'ラスト' },
    ],
  },
};
