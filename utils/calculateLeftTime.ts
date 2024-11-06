export const calculateTimeLeft = (dueDateTime: string): string => {
  const dueDate = new Date(dueDateTime);

  // Ensure the date is valid
  if (isNaN(dueDate.getTime())) {
    return "Invalid Date";
  }

  const now = new Date();
  const timeDifference = dueDate.getTime() - now.getTime();

  if (timeDifference <= 0) {
    return "Expired";
  }

  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return `${hours}h ${minutes}m ${seconds}s`;
};
