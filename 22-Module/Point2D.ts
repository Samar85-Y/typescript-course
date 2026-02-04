export class Point2D {
    private _xPos: number; // ohne weiter Angaben sind die Properties immer Public
    private _yPos: number;

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
