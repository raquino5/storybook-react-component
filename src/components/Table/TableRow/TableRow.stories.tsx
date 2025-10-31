import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableRow } from './TableRow';
import { TableRowProps } from './TableRow.types';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<TableRowProps>;

export const Default: Story = {
  args: {
    cells: ['Ralph', '12', 'Canada'],
    backgroundColor: '#588998',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    cells: ['Ralph', '12', 'Canada'],
    backgroundColor: '#f0f0f0',
    disabled: true,
  },
};
