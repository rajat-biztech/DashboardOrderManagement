const MS_IN_A_SECOND = 1000;
const MS_IN_A_MINUTE = MS_IN_A_SECOND * 60;
const MS_IN_AN_HOUR = MS_IN_A_MINUTE * 60;
const MS_IN_A_DAY = MS_IN_AN_HOUR * 24;

export const calculateTimeLeft = (dueDate: Date) => {
  if (isNaN(dueDate.getTime())) {
    return "Invalid Date";
  }

  const now = new Date();
  const timeDifference = dueDate.getTime() - now.getTime();
  const isPast = timeDifference < 0;
  const absTimeDifference = Math.abs(timeDifference);

  const days = Math.floor(absTimeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (absTimeDifference % MS_IN_A_DAY) / MS_IN_AN_HOUR
  );
  const minutes = Math.floor(
    (absTimeDifference % MS_IN_AN_HOUR) / MS_IN_A_MINUTE
  );

  if (days > 0) {
    return `${isPast ? "-" : ""}${days}d ${hours}h`;
  } else if (hours > 0) {
    return `${isPast ? "-" : ""}${hours}h ${minutes}m`;
  } else {
    return `${isPast ? "-" : ""}${minutes}m`;
  }
};
