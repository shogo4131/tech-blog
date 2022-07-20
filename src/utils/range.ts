export const range = (num: number, start = 0): number[] => {
  return [...new Array(num)].map((_, i) => i + start);
};
