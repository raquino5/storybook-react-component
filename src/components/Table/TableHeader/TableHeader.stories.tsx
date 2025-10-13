import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TableHeader } from "./TableHeader";
import { TableHeaderProps } from "./TableHeader.types";

const meta: Meta<typeof TableHeader> = {
  title: "Components/TableHeader",
  component: TableHeader,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    text: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<TableHeaderProps>;

export const Default: Story = {
  args: {
    text: "Name",
    backgroundColor: "#588998",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: "Name",
    backgroundColor: "#f0f0f0",
    disabled: true,
  },
};
