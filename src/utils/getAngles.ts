function getAngles(date: Date) {
  const [hour, minute, second] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  const hourAngle = hour * 30 + minute * (1 / 2) + second * (1 / 120);
  const minuteAngle = minute * 6 + second * (1 / 10);
  const secondAngle = second * 6;
  return [hourAngle, minuteAngle, secondAngle];
}

export default getAngles;
