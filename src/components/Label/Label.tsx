import React from 'react';
import styled from 'styled-components';
import type { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ disabled?: boolean; $backgroundColor?: string }>`
  font-size: 1rem;
  color: ${({ disabled }) => (disabled ? '#666' : '#333')};
  display: inline-block;
  margin-bottom: 0.25rem;
  background-color: ${({ $backgroundColor, disabled }) =>
    $backgroundColor ? $backgroundColor : disabled ? '#ccc' : '#f5f5f5'};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

export const Label: React.FC<LabelProps> = ({ text, disabled = false, backgroundColor }) => {
  return (
    <StyledLabel disabled={disabled} $backgroundColor={backgroundColor}>
      {text}
    </StyledLabel>
  );
};
