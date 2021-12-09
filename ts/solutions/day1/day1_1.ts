import { getDataFromFileInStringArray } from "../../inputs/FileReader";

let prevMeasurement: number;
let solution: number = 0;
let actualNumber: number;

let data = getDataFromFileInStringArray("inputs/input_day1_1");

prevMeasurement = parseInt(data[0], 10);
data.forEach((number) => {
  actualNumber = parseInt(number, 10);
  if (actualNumber > prevMeasurement) solution++;
  prevMeasurement = actualNumber;
});

export default solution;
