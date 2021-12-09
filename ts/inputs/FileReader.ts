import fs from "fs";

export const myFileReader = (path: string) => {
   return fs.readFileSync(path,"utf-8")
};

export const getDataFromFileInStringArray = (path:string)=>{
   let buffer = myFileReader(path)
   return buffer.split("\n")
}
