import { Submarine, Command, DIRECTION, Position } from "./Submarine";
import { getDataFromFileInStringArray } from "../../inputs/FileReader";

const submarine = new Submarine();

console.log(`submarine`, submarine);

let data: string[] = getDataFromFileInStringArray("inputs/input_day2_2");

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
  if (command.direction === DIRECTION.FORWARD) {
      submarine.changeY(command.coordinates)
  }
  if (command.direction === DIRECTION.DOWN) {
    submarine.changeAim(command.coordinates);
  }
  if (command.direction === DIRECTION.UP) {
    submarine.changeAim(command.coordinates * -1);
  }
});

console.log(`submarine`, submarine)

export default submarine.getX() * submarine.getY();
