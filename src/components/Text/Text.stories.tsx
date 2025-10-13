import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

const meta = {
  component: Text,
  argTypes: {
    children: { control: "text" },
    color: { control: "color" },
    backgroundColor: { control: "color" },
    size: { control: { type: "select" }, options: ["small", "medium", "large"] },
    weight: { control: { type: "select" }, options: ["normal", "bold"] },
    align: { control: { type: "select" }, options: ["left", "center", "right"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Sample Default",
    size: "medium",
    weight: "normal",
    color: "#121516",
    backgroundColor: "#588998",
    align: "center",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Text",
    size: "medium",
    weight: "normal",
    color: "#000000",
    backgroundColor: "#f5f5f5",
    align: "center",
    disabled: true,
  },
};
