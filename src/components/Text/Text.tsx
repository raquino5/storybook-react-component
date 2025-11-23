import React from 'react';
import styled from 'styled-components';
import type { TextProps } from './Text.types';

type StyledTextProps = Pick<TextProps, 'size' | 'weight' | 'color' | 'align' | 'disabled'> & {
  $backgroundColor?: string;
};

const StyledText = styled.p<StyledTextProps>`
  font-size: ${({ size }) => (size === 'small' ? '0.8rem' : size === 'large' ? '1.5rem' : '1rem')};
  font-weight: ${({ weight }) => (weight === 'bold' ? 'bold' : 'normal')};
  color: ${({ disabled, color }) => (disabled ? '#999' : color || 'inherit')};

  background-color: ${({ disabled, $backgroundColor }) =>
    disabled ? '#ccc' : $backgroundColor || 'transparent'};

  text-align: ${({ align }) => align || 'left'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin: 0;
`;

export const Text: React.FC<TextProps> = ({
  children,
  size,
  weight,
  color,
  backgroundColor,
  align,
  disabled,
}) => {
  return (
    <StyledText
      size={size}
      weight={weight}
      color={color}
      $backgroundColor={backgroundColor}
      align={align}
      disabled={disabled}
    >
      {children}
    </StyledText>
  );
};
