import React from 'react';
import styled from 'styled-components';
import type { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${(props) => (props.disabled ? '#ccc' : props.backgroundColor || '#007bff')};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 16px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? '#ccc' : props.backgroundColor ? props.backgroundColor : '#0056b3'};
  }
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  onClick,
  backgroundColor,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      backgroundColor={backgroundColor}
    >
      {label}
    </StyledButton>
  );
};
