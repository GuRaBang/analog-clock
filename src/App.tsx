import { MouseEvent, useState, useCallback } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Clock, Tooltip } from "./components";
import { currentTimeDataState } from "./recoil/globalState";

function App() {
  const [active, setActive] = useState(false);
  const [positionX, setPositionX] = useState<number>();
  const [positionY, setPositionY] = useState<number>();

  const activeTooltip = useCallback(() => {
    setActive(true);
  }, []);
  const inactiveTooltip = useCallback(() => {
    setActive(false);
  }, []);
  const moveTooltip = useCallback((e: MouseEvent<HTMLDivElement>) => {
    setPositionX(e.pageX);
    setPositionY(e.pageY);
  }, []);

  const { formatTimeString } = useRecoilValue(currentTimeDataState);

  return (
    <>
      <Header>Analog Clock</Header>
      <Main>
        <Clock
          onMouseOver={activeTooltip}
          onMouseOut={inactiveTooltip}
          onMouseMove={moveTooltip}
        />
        {active && (
          <Tooltip
            height={70}
            positionX={positionX}
            positionY={(positionY as number) - 70}
          >
            {formatTimeString}
          </Tooltip>
        )}
      </Main>
    </>
  );
}

const Header = styled.header`
  padding: 2rem 0 3rem;
  text-align: center;
  font-size: xxx-large;
  font-weight: 900;
  color: var(--light-gray);
  text-shadow: 1px 1px 2px var(--navy), -2px -2px 2px var(--white);
`;

const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export default App;
