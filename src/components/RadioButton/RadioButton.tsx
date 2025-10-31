import React from 'react';
import styled from 'styled-components';
import type { RadioButtonProps } from './RadioButton.types';

const StyledLabel = styled.label<{ disabled?: boolean; backgroundColor?: string }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#f0f0f0'};
  border-radius: 6px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: background-color 0.3s ease;

  input {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 6px 10px;
  }
`;

const StyledRadio = styled.input`
  width: 16px;
  height: 16px;
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked = false,
  disabled = false,
  onChange,
  backgroundColor,
}) => {
  const handleChange = () => {
    if (!disabled && onChange) onChange(value);
  };

  return (
    <StyledLabel disabled={disabled} backgroundColor={backgroundColor} data-testid="radio-label">
      <StyledRadio
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        data-testid="radio-input"
      />
      {label}
    </StyledLabel>
  );
};
