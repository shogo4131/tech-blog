import { useState } from 'react';

import { ComponentMeta, Story } from '@storybook/react';

import { Pagination, Props } from './index';

export default {
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: Story<Props> = (args) => {
  const { activePage } = args;

  const [page, setPage] = useState<number>(activePage);
  const onChange = (p: number) => setPage(p);

  return <Pagination {...args} activePage={page} onChange={onChange} />;
};

export const Default = Template.bind({});

Default.args = {
  activePage: 1,
  totalPageSize: 12,
};
