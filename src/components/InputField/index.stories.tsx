import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { InputFiled } from './index';

export default {
  component: InputFiled,
} as ComponentMeta<typeof InputFiled>;

export const Default: ComponentStoryObj<typeof InputFiled> = {};

export const PlaceFolder: ComponentStoryObj<typeof InputFiled> = {
  args: {
    placeholder: 'placeholder',
  },
};

export const Lable: ComponentStoryObj<typeof InputFiled> = {
  args: {
    label: 'label',
  },
};

export const Required: ComponentStoryObj<typeof InputFiled> = {
  args: {
    label: 'label',
    required: true,
  },
};

export const Error: ComponentStoryObj<typeof InputFiled> = {
  args: {
    error: 'error message',
  },
};

export const SurffixIcon: ComponentStoryObj<typeof InputFiled> = {
  args: {
    surffixIcon: '/images/search.svg',
  },
};
