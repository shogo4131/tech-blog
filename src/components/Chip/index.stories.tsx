import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Chip } from './index';

export default {
  component: Chip,
} as ComponentMeta<typeof Chip>;

export const Default: ComponentStoryObj<typeof Chip> = {
  args: {
    tags: [
      {
        tag: 'React',
        id: '1',
        createdAt: '',
        publishedAt: '',
        updatedAt: '',
        revisedAt: '',
      },
    ],
  },
};
