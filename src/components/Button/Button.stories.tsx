import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    backgroundColor: { control: "color" },
  },
};


export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Click Me",
    disabled: false,
    backgroundColor: "#588998"
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};
