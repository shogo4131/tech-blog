import { Meta, StoryObj } from '@storybook/react';

import { Chip } from './index';

export default {
  component: Chip,
} as Meta<typeof Chip>;

export const Default: StoryObj<typeof Chip> = {
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
