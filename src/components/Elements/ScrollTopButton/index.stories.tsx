import { Meta, StoryObj } from '@storybook/react';

import { ScrollTopButton } from './index';

const Component = () => {
  return (
    <div style={{ height: '300vh' }}>
      <ScrollTopButton />
    </div>
  );
};

export default {
  component: Component,
} as Meta<typeof ScrollTopButton>;

// TODO: play functionでなんとかしたい
export const Default: StoryObj = {};
