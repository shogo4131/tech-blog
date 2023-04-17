import { Meta, StoryFn } from '@storybook/react';

import { Pagenation, Props } from './index';

export default {
  component: Pagenation,
} as Meta<typeof Pagenation>;

const Template: StoryFn<Props> = (args) => {
  return <Pagenation {...args} />;
};

export const Default = {
  render: Template,

  args: {
    totalCount: 12,
  },
};
