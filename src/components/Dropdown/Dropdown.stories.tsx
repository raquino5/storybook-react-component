import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    defaultValue: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  { label: "Option 4", value: "4" },
  { label: "Option 5", value: "5" },
];

export const Default: Story = {
  args: {
    options,
    defaultValue: "1",
    backgroundColor: "#588998",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    options,
    defaultValue: "1",
    backgroundColor: "#ffffff",
    disabled: true,
  },
};
