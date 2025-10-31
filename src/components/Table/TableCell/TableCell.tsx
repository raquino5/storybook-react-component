import React from 'react';
import styled, { css } from 'styled-components';
import type { TableCellProps } from './TableCell.types';

const StyledCell = styled.td<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || '#ffffff'};
  padding: 0.5rem;
  border: 1px solid #ccc;
  text-align: left;
  transition: background-color 0.3s ease;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  @media (max-width: 600px) {
    font-size: 0.85rem;
    padding: 0.3rem;
  }
`;

export const TableCell: React.FC<TableCellProps> = ({
  text,
  disabled = false,
  backgroundColor = '#ffffff',
}) => {
  return (
    <StyledCell disabled={disabled} backgroundColor={backgroundColor} data-testid="table-cell">
      {text}
    </StyledCell>
  );
};
