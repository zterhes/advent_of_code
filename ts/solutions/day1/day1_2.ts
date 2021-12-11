import { getDataFromFileInStringArray } from "../../inputs/FileReader";

let solution: number = 0;
let data = getDataFromFileInStringArray("inputs/input_day1_2");
let previousSum: number = parseInt(data[0]);

for (let index = 1; index < data.length; index++) {
  let sum: number =
    parseInt(data[index]) +
    parseInt(data[index + 1]) +
    parseInt(data[index + 2]);

  if (sum > previousSum) solution++;
  previousSum = sum;
}

export default solution;
