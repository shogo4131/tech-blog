import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Pagination } from './index';

export default {
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

export const Default: ComponentStoryObj<typeof Pagination> = {
  args: {
    activePage: 5,
    totalPageSize: 30,
  },
};
