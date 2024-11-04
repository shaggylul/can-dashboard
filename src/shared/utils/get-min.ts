export const getMinNumber = (arr: number[]) => {
  if (arr.length === 0) return 0;
  return Math.min(...arr);
};
