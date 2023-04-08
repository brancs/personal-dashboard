export function time2ToHourMinute(dateText) {
  return dateText.toLocaleTimeString("pt-br", {
    hour: "numeric",
    minute: "numeric",
  });
}

export function durationToHrAndMin(duration) {
  const hours = duration / 60;
  const roundHours = Math.floor(hours);
  const minutes = (hours - roundHours) * 60;
  const roundMinutes = Math.round(minutes);
  const hoursText = roundHours > 0 ? `${roundHours}hr` : "";
  const minutesText = roundMinutes > 0 ? `${roundMinutes}min` : "";
  return `${hoursText} ${minutesText}`;
}
