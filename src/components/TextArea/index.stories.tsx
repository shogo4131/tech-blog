import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Textarea } from './index';

export default {
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

export const Default: ComponentStoryObj<typeof Textarea> = {};

export const MaxLengh: ComponentStoryObj<typeof Textarea> = {
  args: {
    rows: 5,
    maxLength: 20,
  },
};

export const Label: ComponentStoryObj<typeof Textarea> = {
  args: {
    label: 'label',
  },
};
