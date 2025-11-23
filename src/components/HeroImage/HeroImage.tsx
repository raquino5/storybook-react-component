import React from 'react';
import styled from 'styled-components';
import type { HeroImageProps } from './HeroImage.types';

const HeroWrapper = styled.div<{ disabled?: boolean; $imageUrl: string }>`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-size: cover;
  background-position: center;
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: filter 0.3s ease;

  @media (max-width: 768px) {
    height: 260px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.6));
`;

const Content = styled.div<{ disabled?: boolean }>`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 1.5rem;
  max-width: 720px;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-bottom: 0.75rem;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  color: #e5e5e5;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  title,
  subtitle,
  disabled = false,
  onClick,
}) => {
  return (
    <HeroWrapper
      data-testid="hero"
      disabled={disabled}
      $imageUrl={imageUrl}
      onClick={disabled ? undefined : onClick}
    >
      <Overlay />
      <Content disabled={disabled}>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Content>
    </HeroWrapper>
  );
};

export type { HeroImageProps } from './HeroImage.types';
