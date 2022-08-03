import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { BlogCard } from './index';

export default {
  component: BlogCard,
} as ComponentMeta<typeof BlogCard>;

export const Default: ComponentStoryObj<typeof BlogCard> = {
  args: {
    image: '/react.png',
    tags: ['React', 'AWS', 'AWS', 'AWS', 'AWS'],
    title: 'Reactエンジニアによる状態管理とは',
  },
};
