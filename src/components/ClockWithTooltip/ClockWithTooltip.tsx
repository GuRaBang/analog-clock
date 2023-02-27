import { MouseEvent, useState, useCallback } from "react";
import { useRecoilValue } from "recoil";
import Clock from "../Clock/Clock";
import Tooltip from "../Tooltip/Tooltip";
import { currentTimeDataState } from "../../recoil/globalState";

interface ClockWithTooltipProps {
  tooltipHeight?: number;
}

function ClockWithTooltip({ tooltipHeight = 70 }: ClockWithTooltipProps) {
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
      <Clock
        onMouseOver={activeTooltip}
        onMouseOut={inactiveTooltip}
        onMouseMove={moveTooltip}
      />
      {active && (
        <Tooltip
          height={tooltipHeight}
          positionX={positionX}
          positionY={(positionY as number) - tooltipHeight}
        >
          {formatTimeString}
        </Tooltip>
      )}
    </>
  );
}

export default ClockWithTooltip;
