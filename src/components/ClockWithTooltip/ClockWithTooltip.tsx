import { MouseEvent, useRef, useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import Clock from "../Clock/Clock";
import Tooltip from "../Tooltip/Tooltip";
import { currentTimeDataState } from "../../recoil/globalState";

interface ClockWithTooltipProps {
  tooltipHeight?: number;
}

function ClockWithTooltip({ tooltipHeight = 70 }: ClockWithTooltipProps) {
  const [active, setActive] = useState(false);
  const { formatTimeString } = useRecoilValue(currentTimeDataState);
  const tooltipRef = useRef<HTMLDivElement>();
  const mousePosition = useRef<{ x: number; y: number }>();

  const activeTooltip = (e: MouseEvent<HTMLDivElement>) => {
    // 툴팁 활성화 시 위치 조정
    mousePosition.current = { x: e.pageX, y: e.pageY - tooltipHeight ?? 0 };
    setActive(true);
  };

  const inactiveTooltip = () => {
    setActive(false);
  };

  const moveTooltip = (e: MouseEvent<HTMLDivElement>) => {
    // 마우스 이동 시 툴팁 위치 조정
    if (!tooltipRef.current) return;
    tooltipRef.current.style.transform = `translate3d(${e.pageX}px, ${
      e.pageY - tooltipHeight ?? 0
    }px, 0)`;
  };

  return (
    <>
      <Clock
        onMouseEnter={activeTooltip}
        onMouseLeave={inactiveTooltip}
        onMouseMove={moveTooltip}
      />
      {active && (
        <Tooltip
          style={{
            transform: `translate3d(${mousePosition.current?.x}px, ${mousePosition.current?.y}px, 0)`,
          }}
          ref={tooltipRef}
          height={tooltipHeight}
        >
          {formatTimeString}
        </Tooltip>
      )}
    </>
  );
}

export default ClockWithTooltip;
