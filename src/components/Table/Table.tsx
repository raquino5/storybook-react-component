import React from 'react';
import styled, { css } from 'styled-components';
import type { TableProps } from './Table.types';

const StyledTableWrapper = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  width: 100%;
  overflow-x: auto;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 1rem;
  border-radius: 8px;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: left;
  }

  th {
    background-color: #f5f5f5;
  }

  @media (max-width: 600px) {
    th,
    td {
      font-size: 0.8rem;
      padding: 0.3rem;
    }
  }
`;

export const Table: React.FC<TableProps> = ({
  headers,
  data,
  disabled = false,
  backgroundColor = '#ffffff',
}) => {
  return (
    <StyledTableWrapper
      disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="table-wrapper"
    >
      <StyledTable>
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((cell, cIdx) => (
                <td key={cIdx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
};
