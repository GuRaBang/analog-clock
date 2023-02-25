import { memo } from "react";
import styled from "styled-components";

interface MarkerProps {
  hour: number;
}

function Marker({ hour }: MarkerProps) {
  return <StyledMarker hour={hour} />;
}

const StyledMarker = styled.div<MarkerProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: ${({ hour }) => `rotate(${hour * 30}deg)`};
  text-align: center;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 0.8%;
    height: 1.6%;
    margin-top: 12%;
    border-radius: 40%;
    background-color: ${({ hour }) =>
      hour % 3 !== 0 ? "var(--navy)" : "var(--turquoise)"};
  }
`;

export default memo(Marker);
