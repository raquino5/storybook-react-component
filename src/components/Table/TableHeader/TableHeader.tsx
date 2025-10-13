import React from "react";
import styled, { css } from "styled-components";
import type { TableHeaderProps } from "./TableHeader.types";

const StyledHeader = styled.th<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || "#f5f5f5"};
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: bold;
  transition: background-color 0.3s ease;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  @media (max-width: 600px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;

export const TableHeader: React.FC<TableHeaderProps> = ({
  text,
  disabled = false,
  backgroundColor = "#f5f5f5",
}) => {
  return (
    <StyledHeader
      disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="table-header"
    >
      {text}
    </StyledHeader>
  );
};
