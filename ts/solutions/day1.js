"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileReader_1 = require("../inputs/FileReader");
let prevMeasurement;
let solution = 0;
let actualNumber;
let buffer = (0, FileReader_1.myFileReader)("inputs/input_1");
let data = buffer.split("\n");
prevMeasurement = parseInt(data[0], 10);
data.forEach((number) => {
    actualNumber = parseInt(number, 10);
    if (actualNumber > prevMeasurement)
        solution++;
    prevMeasurement = actualNumber;
});
exports.default = solution;
