// 17-oop-getter-setter-1.ts
/**
 * Aufgaben:
 * Klasse `Rectangle`:
 * - private _width, _height (number)
 * - getter area (number)
 * - setter width/height: Error wenn <= 0
 */

export class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    // TODO
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    // TODO
  }

  get area(): number {
    // TODO
    return 0;
  }
}
