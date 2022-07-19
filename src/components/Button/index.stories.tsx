import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Button } from './index';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    children: '送信',
    onClick: action('button click'),
  },
};

export const Disabled: ComponentStoryObj<typeof Button> = {
  args: {
    children: '送信',
    disabled: true,
  },
};
