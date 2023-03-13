import { forwardRef } from "react";
import styled from "styled-components";

interface TooltipProps {
  height: number;
  width?: number;
  [key: string]: unknown;
}

const Tooltip = forwardRef(
  ({ height, width, children, ...props }: TooltipProps, ref) => {
    return (
      <StyledToolTip
        ref={ref}
        height={height}
        width={width}
        role="tooltip"
        {...props}
      >
        {children}
      </StyledToolTip>
    );
  }
);

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

export default Tooltip;
