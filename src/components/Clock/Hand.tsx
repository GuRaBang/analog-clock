import styled, { css } from "styled-components";

interface HandProps {
  angle?: number;
  type: "hour" | "minute" | "second";
}
function Hand({ angle, type }: HandProps) {
  return (
    <StyledHand style={{ transform: `rotate(${angle}deg)` }} type={type} />
  );
}

const stickStyles = {
  hour: css`
    border-top: 90px solid transparent;
    border-bottom: 90px solid var(--navy);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  `,
  minute: css`
    border-top: 130px solid transparent;
    border-bottom: 130px solid var(--orange);
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
  `,
  second: css`
    border-top: 170px solid transparent;
    border-bottom: 170px solid var(--turquoise);
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
  `,
};

const StyledHand = styled.div<HandProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  &::before {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 0);
    content: "";
    display: block;
    width: 0;
    height: 0;
    ${({ type }) => stickStyles[type]}
  }
`;

export default Hand;
