import { Bar } from "./types";

export const calculateTotalByType = (
  type: string,
  data: Array<Bar>
): number => {
  let result = 0;

  data.forEach((item) => {
    if (item.name === type) {
      result += item.value;
    }
  });

  return result;
};

export const calculateTotal = (data: Array<Bar>): number => {
  let result = 0;

  data.forEach((item) => {
    result += item.value;
  });

  return result;
};
