class Point2D {
  xPos: number; // ohne weiter Angaben sind die Properties immer Public
  yPos: number;

  constructor(xPosInput: number, yPosInput: number) {
    this.xPos = xPosInput;
    this.yPos = yPosInput;
  }
}


class Point3D extends Point2D {
  zPos: number;

  constructor(xPosInput: number, yPosInput: number, zPostInput: number) {
    super(xPosInput, yPosInput);
    this.zPos = zPostInput;
  }
}

const p1: Point2D = { xPos: 0, yPos: 0 }
const p2: Point3D = { xPos: 1, yPos: 1, zPos: 5 }

console.log(p1, p2);
