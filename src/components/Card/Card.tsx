import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ disabled?: boolean; bgColor?: string }>`
  padding: 20px;
  border-radius: 16px;
  background-color: ${({ disabled, bgColor }) =>
    disabled ? '#4b5563' : bgColor || '#020617'}; /* dark default */
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.9);
  transition:
    background-color 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
  max-width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 55px rgba(15, 23, 42, 1);
  }
`;

const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #f9fafb;
`;

const Content = styled.p`
  margin: 0 0 8px 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #9ca3af;
`;

export const Card: React.FC<CardProps> = ({
  title,
  content,
  disabled = false,
  backgroundColor,
  children,
}) => {
  return (
    <StyledCard data-testid="card" disabled={disabled} bgColor={backgroundColor}>
      <Title>{title}</Title>
      <Content>{content}</Content>

      {children && <div>{children}</div>}
    </StyledCard>
  );
};
