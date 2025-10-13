import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Img } from "./Img";
import { ImgProps } from "./Img.types";

export default {
  title: "Components/Img",
  component: Img,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta<ImgProps>;

type Story = StoryObj<ImgProps>;

export const Default: Story = {
  args: {
    src: "https://cdn.britannica.com/53/252953-050-30D00122/Mickey-Mouse-Steamboat-Willie-Walt-Disney-Public-Domain.jpg",
    alt: "Mickey Mouse",
    width: "200px",
    height: "174px",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: "https://cdn.britannica.com/53/252953-050-30D00122/Mickey-Mouse-Steamboat-Willie-Walt-Disney-Public-Domain.jpg",
    alt: "Mickey Mouse",
    width: "200px",
    height: "174px",
    disabled: true,
  },
};
