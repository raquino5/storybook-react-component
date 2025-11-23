import React from 'react';
import styled, { css } from 'styled-components';
import type { TableRowProps } from './TableRow.types';

const StyledRow = styled.tr<{ disabled?: boolean; $backgroundColor?: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#ffffff'};
  transition: background-color 0.3s ease;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }

  td {
    padding: 0.5rem;
    border: 1px solid #ccc;
    text-align: left;
  }
`;

export const TableRow: React.FC<TableRowProps> = ({
  cells,
  disabled = false,
  backgroundColor = '#ffffff',
}) => {
  return (
    <StyledRow disabled={disabled} $backgroundColor={backgroundColor} data-testid="table-row">
      {cells.map((cell, idx) => (
        <td key={idx}>{cell}</td>
      ))}
    </StyledRow>
  );
};
