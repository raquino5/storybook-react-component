import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from './Label';

const meta = {
  component: Label,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Hello World',
    disabled: false,
    backgroundColor: '#588998',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Label',
    disabled: true,
  },
};
