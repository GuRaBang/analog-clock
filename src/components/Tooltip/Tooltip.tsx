import styled from "styled-components";

interface TooltipProps {
  positionX?: number;
  positionY?: number;
  [key: string]: unknown;
}

function Tooltip({ positionX, positionY, children, ...props }: TooltipProps) {
  return (
    <StyledToolTip
      style={{ transform: `translate3d(${positionX}px, ${positionY}px, 0)` }}
      role="tooltip"
      {...props}
    >
      {children}
    </StyledToolTip>
  );
}

const StyledToolTip = styled.div<TooltipProps>`
  position: absolute;
  top: -70px;
  left: 0;
  width: 180px;
  height: 70px;
  border-radius: 10px;
  font-size: x-large;
  font-weight: 600;
  text-align: center;
  line-height: 70px;
  color: var(--white);
  background: var(--navy);
  letter-spacing: 0.2rem;
  pointer-events: none;
  transition: width 2s, height 2s;
`;

export default Tooltip;
