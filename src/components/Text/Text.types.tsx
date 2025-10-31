import React from 'react';

export interface TextProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  weight?: 'normal' | 'bold';
  color?: string;
  align?: 'left' | 'center' | 'right';
  disabled?: boolean;
  backgroundColor?: string;
}
