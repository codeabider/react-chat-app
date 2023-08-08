export const getDate = (utcDate: string) => {
  const date = new Date(utcDate);
  return `${date.toDateString()} - ${date.toLocaleTimeString()}`;
};
