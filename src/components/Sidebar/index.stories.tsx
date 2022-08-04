import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Sidebar } from './index';

export default {
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

export const Default: ComponentStoryObj<typeof Sidebar> = {};