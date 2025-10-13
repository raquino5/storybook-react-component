import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TableFooter } from "./TableFooter";
import { TableFooterProps } from "./TableFooter.types";

const meta: Meta<typeof TableFooter> = {
  title: "Components/TableFooter",
  component: TableFooter,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    text: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<TableFooterProps>;

export const Default: Story = {
  args: {
    text: "Total: $100",
    backgroundColor: "#588998",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: "Total: $100",
    backgroundColor: "#e0e0e0",
    disabled: true,
  },
};
