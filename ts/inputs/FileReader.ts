import fs from "fs";

export const myFileReader = (path: string) => {
   return fs.readFileSync(path,"utf-8")
};
