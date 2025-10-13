export type DropdownOption = {
  label: string;
  value: string | number;
};

export interface DropdownProps {
  options: DropdownOption[];
  defaultValue?: string | number;
  disabled?: boolean;
  backgroundColor?: string;
  onChange?: (value: string | number) => void;
}
