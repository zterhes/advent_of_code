export class Submarine {
  private x: number;
  private y: number;
  private aim: number;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.aim = 0;
  }
  public changeY = (v: number): void => {
      console.log(`changeY`, v)
    this.y += v;
    this.x += this.aim * v;
  };
  public changeAim = (v: number): void => {
      console.log(`changeAim`, v)
    this.aim += v;
  };

  public setX(v: number) {
    this.x = v;
  }

  public setY(v: number) {
    this.y = v;
  }
  public setAim(v: number) {
    this.aim = v;
  }

  public getX = (): number => {
    return this.x;
  };

  public getY(): number {
    return this.y;
  }

  public getAim(): number {
    return this.aim;
  }
}
export type Position = {
  x: number;
  y: number;
};

export type Command = {
  direction: DIRECTION;
  coordinates: number;
};

export enum DIRECTION {
  FORWARD = "forward",
  UP = "up",
  DOWN = "down",
}
