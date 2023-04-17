import { Meta, StoryObj } from '@storybook/react';

import { InputFiled } from './index';

export default {
  component: InputFiled,
} as Meta<typeof InputFiled>;

export const Default: StoryObj<typeof InputFiled> = {};

export const PlaceFolder: StoryObj<typeof InputFiled> = {
  args: {
    placeholder: 'placeholder',
  },
};

export const Lable: StoryObj<typeof InputFiled> = {
  args: {
    label: 'label',
  },
};

export const Required: StoryObj<typeof InputFiled> = {
  args: {
    label: 'label',
    required: true,
  },
};

export const Error: StoryObj<typeof InputFiled> = {
  args: {
    error: 'error message',
  },
};

export const SurffixIcon: StoryObj<typeof InputFiled> = {
  args: {
    surffixIcon: '/images/search.svg',
  },
};
