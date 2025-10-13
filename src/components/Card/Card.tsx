import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<{ disabled?: boolean; bgColor?: string }>`
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ disabled, bgColor }) => (disabled ? "#ccc" : bgColor || "#f5f5f5")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: background-color 0.3s;
  max-width: 300px;
`;

const Title = styled.h3`
  margin: 0 0 8px 0;
`;

const Content = styled.p`
  margin: 0;
`;

export const Card: React.FC<CardProps> = ({ title, content, disabled = false, backgroundColor }) => {
  return (
    <StyledCard disabled={disabled} bgColor={backgroundColor}>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </StyledCard>
  );
};
