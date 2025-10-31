import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table } from './Table';
import { TableProps } from './Table.types';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<TableProps>;

export const Default: Story = {
  args: {
    headers: ['Name', 'Age', 'Country'],
    data: [
      ['Ralph', 12, 'Canada'],
      ['Daren', 25, 'Philippines'],
      ['Aquino', 38, 'France'],
    ],
    disabled: false,
    backgroundColor: '#588998',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    backgroundColor: '#f0f0f0',
  },
};
