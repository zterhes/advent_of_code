"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const myFileReader = (path) => {
    return fs_1.default.readFileSync(path, "utf-8");
};
exports.myFileReader = myFileReader;
