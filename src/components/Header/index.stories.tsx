import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Header } from './index';

export default {
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default: ComponentStoryObj<typeof Header> = {};
