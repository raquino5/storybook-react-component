import React from 'react';
import styled from 'styled-components';
import type { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ disabled?: boolean; backgroundColor?: string }>`
  border: 1px solid rgba(148, 163, 184, 0.6);
  border-radius: 999px;
  padding: 0.6rem 1.3rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  /* Text color */
  color: #0b1020;

  /* Match your portfolio palette:
     - default: gradient (teal -> cyan -> indigo)
     - custom: use backgroundColor prop
     - disabled: muted slate */
  background: ${(props) =>
    props.disabled
      ? 'rgba(51, 65, 85, 0.85)'
      : props.backgroundColor ||
        'linear-gradient(135deg, #22c55e, #22d3ee, #6366f1)'};

  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.9);

  transition:
    transform 0.15s ease-out,
    box-shadow 0.15s ease-out,
    filter 0.15s ease-out;

  &:hover {
    transform: ${(props) => (props.disabled ? 'none' : 'translateY(-1px) scale(1.01)')};
    box-shadow: ${(props) =>
      props.disabled
        ? '0 10px 24px rgba(15, 23, 42, 0.7)'
        : '0 20px 40px rgba(15, 23, 42, 1)'};
    filter: ${(props) => (props.disabled ? 'none' : 'brightness(1.05)')};
  }

  &:active {
    transform: ${(props) => (props.disabled ? 'none' : 'translateY(0)')};
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.9);
    filter: brightness(0.97);
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
