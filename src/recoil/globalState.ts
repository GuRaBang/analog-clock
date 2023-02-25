import { atom, selector } from "recoil";
import { getAngles, getFormatTimeString } from "../utils";

const currentDateState = atom({
  key: "currentDateState",
  default: new Date(),
});

const currentTimeDataState = selector({
  key: "currentTimeDataState",
  get: ({ get }) => {
    const date = get(currentDateState);
    const [hour, minute, second] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    const [hourAngle, minuteAngle, secondAngle] = getAngles(date);
    const formatTimeString = getFormatTimeString(hour, minute);

    return {
      hour,
      minute,
      second,
      hourAngle,
      minuteAngle,
      secondAngle,
      formatTimeString,
    };
  },
});

export { currentDateState, currentTimeDataState };
