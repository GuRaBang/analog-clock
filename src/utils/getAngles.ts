function getAngles(date: Date) {
  const [hour, min, sec] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  const hourAngle = hour * 30 + min * (1 / 2) + sec * (1 / 120);
  const minAngle = min * 6 + sec * (1 / 10);
  const secAngle = sec * 6;
  return [hourAngle, minAngle, secAngle];
}

export default getAngles;
