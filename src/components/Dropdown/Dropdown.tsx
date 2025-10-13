import React, { useState } from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const Select = styled.select<{ backgroundColor?: string; disabled?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? "#e0e0e0" : backgroundColor || "#fff"};
  color: ${({ disabled }) => (disabled ? "#888" : "#000")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultValue,
  disabled = false,
  backgroundColor,
  onChange,
}) => {
  const [selected, setSelected] = useState<string | number>(
    defaultValue || (options.length > 0 ? options[0].value : "")
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <Select
      value={selected}
      onChange={handleChange}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};
