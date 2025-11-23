import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const Select = styled.select<{ backgroundColor?: string; disabled?: boolean }>`
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.6);
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? 'rgba(51, 65, 85, 0.85)' : backgroundColor || 'rgba(15, 23, 42, 0.95)'};

  color: ${({ disabled }) => (disabled ? '#9ca3af' : '#e5e7eb')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.9);
  outline: none;

  transition:
    background-color 0.15s ease-out,
    box-shadow 0.15s ease-out,
    transform 0.15s ease-out;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 18px 32px rgba(15, 23, 42, 1);
  }

  &:focus {
    box-shadow:
      0 0 0 1px rgba(129, 140, 248, 0.7),
      0 20px 36px rgba(15, 23, 42, 1);
  }

  option {
    background-color: #020617;
    color: #e5e7eb;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultValue,
  disabled = false,
  backgroundColor,
  onChange,
}) => {
  const [selected, setSelected] = useState<string | number>(
    defaultValue || (options.length > 0 ? options[0].value : ''),
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
