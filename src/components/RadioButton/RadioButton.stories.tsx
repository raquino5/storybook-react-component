import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { RadioButton } from './RadioButton';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Option A',
    name: 'example',
    value: 'a',
    disabled: false,
    backgroundColor: '#588998',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Option',
    name: 'example',
    value: 'b',
    disabled: true,
    backgroundColor: '#f0f0f0',
  },
};
