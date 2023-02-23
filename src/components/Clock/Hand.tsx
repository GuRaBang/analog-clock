import styled, { css } from "styled-components";

interface HandProps {
  angle: number;
  type: "hour" | "min" | "sec";
}

const stickStyles = {
  hour: css`
    border-top: 90px solid transparent;
    border-bottom: 90px solid var(--navy);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  `,
  min: css`
    border-top: 130px solid transparent;
    border-bottom: 130px solid var(--orange);
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
  `,
  sec: css`
    border-top: 170px solid transparent;
    border-bottom: 170px solid var(--turquoise);
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
  `,
};

const Hand = styled.div<HandProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: ${({ angle }) => `rotate(${angle}deg)`};
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
