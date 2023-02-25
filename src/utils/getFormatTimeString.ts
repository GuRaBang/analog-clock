function getFormatTimeString(...timeData: Array<number>) {
  const padTimeArr = timeData.map((data) => (data + "").padStart(2, "0"));
  return padTimeArr.join(":");
}

export default getFormatTimeString;
