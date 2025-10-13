import React from "react";
import styled from "styled-components";
import type { ImgProps } from "./Img.types";

const StyledImg = styled.img<{ disabled?: boolean; width?: string | number; height?: string | number }>`
  width: ${(props) => (typeof props.width === "number" ? `${props.width}px` : props.width || "100%")};
  height: ${(props) => (typeof props.height === "number" ? `${props.height}px` : props.height || "auto")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  transition: opacity 0.3s;
`;

export const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled = false }) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} disabled={disabled} />;
};
