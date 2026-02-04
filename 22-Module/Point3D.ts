import { Point2D } from "./Point2D.js";

export class Point3D extends Point2D {
    private _zPos: number;

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