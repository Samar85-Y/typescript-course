// Man nutzt Implements um eine Implementierung für real existeierende Klassen vorzugaben
interface AppoinmentInterface {
  startTime: Date;
  endTime: Date;
  description: string;

  printAppoinment(): void;
}

class Appoinment implements AppoinmentInterface {
  private _startTime: Date;
  private _endTime: Date;
  private _description: string;

  constructor(
    startTimeInput: Date,
    endTimeInput: Date,
    descriptionInput: string
  ) {
    this._startTime = startTimeInput;
    this._endTime = endTimeInput;
    this._description = descriptionInput;

  }
  get startTime(): Date {
    return this.startTime;
  }

  get endTime(): Date {
    return this.endTime;
  }
  get description(): string {
    return this.description;
  }
  printAppoinment(): void {
    console.log("Start Time:" + this._startTime, "End Time: " + this._endTime, this._description);

  }

}

const a = new Appoinment(
  new Date('2026-02-04T10:52:00'),
  new Date('2026-02-04T10:52:00'),
  'Einer Dauer'
);

a.printAppoinment();