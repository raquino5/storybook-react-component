export interface TableProps {
  headers: string[];
  data: (string | number)[][];
  disabled?: boolean;
  backgroundColor?: string;
}
