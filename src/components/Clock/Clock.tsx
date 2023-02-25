import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import Marker from "./Marker";
import Hand from "./Hand";
import {
  currentDateState,
  currentTimeDataState,
} from "../../recoil/globalState";
import { useInterval } from "../../hooks";

function Clock({ ...props }) {
  const setCurrentDate = useSetRecoilState(currentDateState);
  const { hour, minute, hourAngle, minuteAngle, secondAngle } =
    useRecoilValue(currentTimeDataState);

  useInterval(() => {
    setCurrentDate(new Date());
  }, 1000);

  return (
    <>
      <span className="srOnly" id="time">
        현재 시간은 {hour}시 {minute}분 입니다.
      </span>
      <Face aria-labelledby="time" {...props}>
        <Hand angle={secondAngle} type="second" />
        <Hand angle={minuteAngle} type="minute" />
        <Hand angle={hourAngle} type="hour" />
        {Array.from({ length: 12 }).map((_, idx) => (
          <Marker key={idx} hour={idx + 1} />
        ))}
        <Dot />
      </Face>
    </>
  );
}

const Face = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  clip-path: circle(52%);

  background-color: var(--light-gray);
  box-shadow: 1.5px 1.5px 3px var(--navy), -5px -5px 5px var(--white);
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 82%;
    height: 82%;
    margin: 9%;
    border-radius: 50%;
    box-shadow: -1.5px -1.5px 3px var(--navy), 5px 5px 5px var(--white);
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 30%;
    height: 30%;
    margin: 35%;
    border-radius: 50%;
    box-shadow: 2px 2px 5px var(--navy), -5px -5px 5px var(--white);
  }
`;

const Dot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2%;
  height: 2%;
  border-radius: 50%;
  background-color: var(--navy);
`;

export default Clock;
