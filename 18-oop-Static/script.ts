class Point2D {
  private _xPos: number; // ohne weiter Angaben sind die Properties immer Public
  private _yPos: number;

  //Statische Eigenschaften können sind über die Klasses zugänglich
  public static NUM_DIMENTIONS = 2;

  constructor(xPosInput: number, yPosInput: number) {
    this._xPos = xPosInput;
    this._yPos = yPosInput;
  }

  public get xPos(): number {
    return this._xPos;
  }
  public get yPos(): number {
    return this._yPos;
  }

  public set xPos(xPosNew: number) {
    this._xPos = xPosNew;
  }
  public set yPos(yPosNew: number) {
    this._xPos = yPosNew;
  }
}


class Point3D extends Point2D {
  private _zPos: number;

  public static NUM_DIMENTIONS = 3;


  constructor(xPosInput: number, yPosInput: number, zPostInput: number) {
    super(xPosInput, yPosInput);
    this._zPos = zPostInput;
  }

  public get zPos(): number {
    return this._zPos;
  }

  public set zPos(zPosNew: number) {
    this._zPos = zPosNew;
  }
}

const p1: Point2D = new Point2D(0, 0);
const p2: Point3D = new Point3D(1, 1, 5);

console.log(p1, p2);


// Getter-/Setter-Methoden werden ohne runde Klammen aufgrufen
//Aufruf der xPos-Methode mit Wertzuweisung = Setter-Methode
p1.xPos = 4; //setter methode einrufe

//Aufruf der xPos-Methode ohne Wertzuweisung = Getter-Methode
console.log(p1.xPos, p2);
console.log(Point2D.NUM_DIMENTIONS);  //2
console.log(Point3D.NUM_DIMENTIONS);  //3
