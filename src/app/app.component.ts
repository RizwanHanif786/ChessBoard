import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  initialPosition: string = '';
  isShowResult: boolean = false;
  isPlaced: boolean = false;
  count = 0;
  directions = {
    north: 'NORTH',
    south: 'SOUTH',
    east: 'EAST',
    west: 'WEST',
  };
  selectedElem = {
    X: 0,
    Y: 0,
    face: '',
    color: '',
  };

  selectedColor = '';
  selectedFace: string = '';

  ngOnInit(): void { }

  /**
   * Moves the pawn one unit forward in the direction it is currently facing.
   * @returns 
   */
  move(): void {
    this.count = 1;
    if (this.selectedElem.X < 7 && this.selectedElem.Y < 7) {
      switch (this.selectedElem.face.toLowerCase()) {
        case this.directions.north.toLowerCase():
          this.selectedElem.Y = this.selectedElem.Y + this.count;
          break;
        case this.directions.west.toLowerCase():
          this.selectedElem.X = this.selectedElem.X - this.count;
          break;
        case this.directions.east.toLowerCase():
          this.selectedElem.X = this.selectedElem.X + this.count;
          break;
        case this.directions.south.toLowerCase():
          this.selectedElem.Y = this.selectedElem.Y - this.count;
          break;

        default:
          break;
      }

    } else {
      return;
    }
  }

  /**
   * CLears board.
   */
  clearBoard(): void {
    this.initialPosition = '';
    this.selectedElem = {
      X: 0,
      Y: 0,
      face: '',
      color: ''
    };
    this.count = 0;
  }

  /**
   * Checks Pawn's current direction and changes accordingly.
   * @param {string} direction Direction where pawn need to be rorated in 90deg.
   */
  checkPawnDirection(direction: string): void {
    if (direction === 'left') {
      switch (this.selectedElem.face.toLowerCase()) {
        case this.directions.north.toLowerCase():
          this.selectedFace = 'WEST';
          break;
        case this.directions.west.toLowerCase():
          this.selectedFace = 'SOUTH';
          break;
        case this.directions.south.toLowerCase():
          this.selectedFace = 'EAST';
          break;
        case this.directions.east.toLowerCase():
          this.selectedFace = 'NORTH';
          break;

        default:
          break;
      }

    } else {
      switch (this.selectedElem.face.toLowerCase()) {
        case this.directions.north.toLowerCase():
          this.selectedFace = 'EAST';
          break;
        case this.directions.east.toLowerCase():
          this.selectedFace = 'SOUTH';
          break;
        case this.directions.south.toLowerCase():
          this.selectedFace = 'WEST';
          break;
        case this.directions.west.toLowerCase():
          this.selectedFace = 'NORTH';
          break;

        default:
          break;
      }
    }

    this.selectedElem.face = this.selectedFace;
  }

  /**
   * Places Pawn on board.
   */
  placePawns(): void {
    const inputParts = this.initialPosition.split(',');
    this.selectedElem.X = Number(inputParts[0]);
    this.selectedElem.Y = Number(inputParts[1]);
    this.selectedElem.face = inputParts[2];
    this.selectedElem.color = inputParts[3];
    this.isPlaced = true;

  }

  /**
   * Shows output results.
   */
  showResult(): void {
    if (this.selectedElem.X < 7 && this.selectedElem.Y < 7)
      this.isShowResult = true;
  }
}
