import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { BlogCard } from './index';

export default {
  component: BlogCard,
} as ComponentMeta<typeof BlogCard>;

export const Default: ComponentStoryObj<typeof BlogCard> = {
  args: {
    thumbnail: {
      url: '/react.png',
      width: 0,
      height: 0,
    },
    tags: [
      {
        tag: 'React',
        id: '1',
        createdAt: '',
        publishedAt: '',
        updatedAt: '',
        revisedAt: '',
      },
      {
        tag: 'AWS',
        id: '1',
        createdAt: '',
        publishedAt: '',
        updatedAt: '',
        revisedAt: '',
      },
    ],
    title: 'Reactエンジニアによる状態管理とは',
    createdAt: '2022-05-12T12:10:02.459Z',
  },
};
