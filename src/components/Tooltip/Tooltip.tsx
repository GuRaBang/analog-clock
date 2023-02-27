import { memo } from "react";
import styled from "styled-components";

interface TooltipProps {
  height: number;
  width?: number;
  positionX?: number;
  positionY?: number;
  [key: string]: unknown;
}

function Tooltip({
  height,
  width,
  positionX,
  positionY,
  children,
  ...props
}: TooltipProps) {
  return (
    <StyledToolTip
      height={height}
      width={width}
      style={{
        transform: `translate3d(${positionX ?? 0}px, ${positionY ?? 0}px, 0)`,
      }}
      role="tooltip"
      {...props}
    >
      {children}
    </StyledToolTip>
  );
}

const StyledToolTip = styled.div<TooltipProps>`
  height: ${({ height }) => `${height}px`};
  line-height: ${({ height }) => `${height}px`};
  width: ${({ width }) => (width !== undefined ? `${width}px` : "fit-content")};
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 20px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: var(--white);
  background: var(--navy);
  letter-spacing: 0.2rem;
  pointer-events: none;
`;

export default memo(Tooltip);
