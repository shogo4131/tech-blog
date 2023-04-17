import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

export default {
  component: Button,
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: '送信',
    onClick: action('button click'),
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    children: '送信',
    disabled: true,
  },
};
