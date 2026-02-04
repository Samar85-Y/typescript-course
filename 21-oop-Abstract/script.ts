interface AppoinmentInterface {
  startTime: Date;
  endTime: Date;
  description: string;

  printAppoinment(): void;
}

abstract class AppoinmentABC {
  protected startTime: Date;
  protected endTime: Date;
  protected description: string;

  constructor(
    startTimeInput: Date,
    endTimeInput: Date,
    descriptionInput: string
  ) {
    this.startTime = startTimeInput;
    this.endTime = endTimeInput;
    this.description = descriptionInput;
  }
  /**
   * Methoden implementieren
   * 
   * Var. 1: Methode wird in der abstrakten Klasse inkl. Anweisungsblock implemntiert
   * Dann darf diese Methode in der abgeleiteten Klasse NICHT noch einmal implementiert werden
   */
  /**printAppoinment(): void {
    console.log("Start Time:" + this.startTime, "End Time: " + this.endTime, this.description);

  }*/

  /**
   * Var. 2: Methode wird in der abstrakten Klasee nur angageben (ähnlich Interfaces)
   * Die Implementierung, also die Anweisunge, müssen in der abgeleiteten Klasse umgesetzt werden.
   */

}

class Appoinment extends AppoinmentABC {

  constructor(
    startTimeInput: Date,
    endTimeInput: Date,
    descriptionInput: string
  ) {
    super(startTimeInput, endTimeInput, descriptionInput);
  }

  printAppoinment(): void {
    console.log("Start Time:" + this.startTime, "End Time: " + this.endTime, this.description);

  }

}

const a = new Appoinment(
  new Date('2026-02-04T10:52:00'),
  new Date('2026-02-04T10:52:00'),
  'Einer Dauer'
);

a.printAppoinment();