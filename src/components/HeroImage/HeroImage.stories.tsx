import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage, HeroImageProps } from './HeroImage';

const meta: Meta<HeroImageProps> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    title: { control: 'text' },
    imageUrl: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<HeroImageProps>;

export const Default: Story = {
  args: {
    title: 'Mickey Mouse!',
    imageUrl:
      'https://cdn.britannica.com/53/252953-050-30D00122/Mickey-Mouse-Steamboat-Willie-Walt-Disney-Public-Domain.jpg',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Mickey Mouse!',
    imageUrl:
      'https://cdn.britannica.com/53/252953-050-30D00122/Mickey-Mouse-Steamboat-Willie-Walt-Disney-Public-Domain.jpg',
    disabled: true,
  },
};
