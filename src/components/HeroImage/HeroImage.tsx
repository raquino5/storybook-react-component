import React from 'react';
import styled from 'styled-components';
import type { HeroImageProps } from './HeroImage.types';

const HeroWrapper = styled.div<{ disabled?: boolean; imageUrl: string }>`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: filter 0.3s;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const Title = styled.h1<{ disabled?: boolean }>`
  color: red;
  font-size: 2.5rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, title, disabled = false }) => {
  return (
    <HeroWrapper data-testid="hero" disabled={disabled} imageUrl={imageUrl}>
      <Title disabled={disabled}>{title}</Title>
    </HeroWrapper>
  );
};

export type { HeroImageProps } from './HeroImage.types';
