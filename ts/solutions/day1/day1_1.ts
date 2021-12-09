import { myFileReader } from "../../inputs/FileReader";

let prevMeasurement: number;
let solution: number = 0;
let actualNumber: number;

let buffer = myFileReader("inputs/input_day1_1");
let data = buffer.split("\n");

prevMeasurement = parseInt(data[0], 10);
data.forEach((number) => {
  actualNumber = parseInt(number, 10);
  if (actualNumber > prevMeasurement) solution++;
  prevMeasurement = actualNumber;
});

export default solution;
