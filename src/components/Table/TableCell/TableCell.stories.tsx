import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableCell } from './TableCell';
import { TableCellProps } from './TableCell.types';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<TableCellProps>;

export const Default: Story = {
  args: {
    text: 'Ralph',
    backgroundColor: '#588998',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Ralph',
    backgroundColor: '#f0f0f0',
    disabled: true,
  },
};
