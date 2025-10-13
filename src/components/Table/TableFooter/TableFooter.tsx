import React from "react";
import styled, { css } from "styled-components";
import type { TableFooterProps } from "./TableFooter.types";

const StyledFooter = styled.tfoot<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || "#f5f5f5"};
  text-align: left;
  font-weight: bold;
  padding: 0.75rem 1rem;
  transition: background-color 0.3s ease;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  td {
    padding: 0.75rem 1rem;
  }

  @media (max-width: 600px) {
    td {
      padding: 0.5rem;
      font-size: 0.9rem;
    }
  }
`;

export const TableFooter: React.FC<TableFooterProps> = ({
  text,
  disabled = false,
  backgroundColor = "#f5f5f5",
}) => {
  return (
    <StyledFooter
      disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="table-footer"
    >
      <tr>
        <td colSpan={100}>{text}</td>
      </tr>
    </StyledFooter>
  );
};
