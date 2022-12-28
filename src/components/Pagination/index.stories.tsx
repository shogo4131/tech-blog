import { ComponentMeta, Story } from '@storybook/react';

import { Pagenation, Props } from './index';

export default {
  component: Pagenation,
} as ComponentMeta<typeof Pagenation>;

const Template: Story<Props> = (args) => {
  return <Pagenation {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  totalCount: 12,
};
