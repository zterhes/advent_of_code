import { Direction } from "readline";
import { getDataFromFileInStringArray } from "../../inputs/FileReader";

type Position = {
  x: number;
  y: number;
};

type Command = {
  direction: DIRECTION;
  coordinates: number;
};

enum DIRECTION {
  FORWARD = "forward",
  UP = "up",
  DOWN = "down",
}

let solution: number = 0;

let data: String[] = getDataFromFileInStringArray("inputs/input_day2_1");

let actualCoordinates: Position = { x: 0, y: 0 };

const getDirection = (input: string): DIRECTION => {
  if (Object.values(DIRECTION).includes(input as DIRECTION)) {
    return input as DIRECTION;
  }
  throw new WrongInputDataError(`${input} is not a direction`);
};

data.forEach((commandString) => {
  let commandArr: string[] = commandString.split(" ");
  let directionStr = DIRECTION.DOWN;
  try {
    directionStr = getDirection(commandArr[0]);
  } catch (error: any) {
    console.log(`error`, error.message);
  }
  let command: Command = {
    direction: directionStr,
    coordinates: parseInt(commandArr[1]),
  };
  if (command.direction === DIRECTION.FORWARD)
    actualCoordinates.y += command.coordinates;
  if (command.direction === DIRECTION.UP)
    actualCoordinates.x -= command.coordinates;
  if (command.direction === DIRECTION.DOWN)
    actualCoordinates.x += command.coordinates;
});
export default solution = actualCoordinates.x * actualCoordinates.y;
