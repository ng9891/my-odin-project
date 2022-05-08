export const getPreviousDayDT = () => {
  const date = new Date();
  return Math.floor(date.getTime() / 1000);
};
