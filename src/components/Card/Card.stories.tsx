import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';
import type { CardProps } from './Card.types';

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    title: 'SystemDonut',
    content: 'My gamer name is systemdonut!',
    disabled: false,
    backgroundColor: '#588998',
  },
};

export const Disabled: Story = {
  args: {
    title: 'SystemDonut',
    content: 'My gamer name is systemdonut!',
    disabled: true,
    backgroundColor: '#f5f5f5',
  },
};
