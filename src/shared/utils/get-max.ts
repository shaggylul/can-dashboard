export const getMaxNumber = (arr: number[]) => {
  if (arr.length === 0) return 0;
  return Math.max(...arr);
};
