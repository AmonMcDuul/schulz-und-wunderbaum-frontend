import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simonsays',
  templateUrl: './simonsays.component.html',
  styleUrls: ['./simonsays.component.scss']
})
export class SimonsaysComponent implements OnInit {

  displaySequence: Array<number> = [1,2,3,4]
  compSequence: Array<number> = [];
  userSequence: Array<number> = [];
  lengthSequence: number = 2;
  solved: Boolean = false;
  playerMove: Boolean = false;
  compStyle: number = -1;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.generateSequence()
  }

  generateNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  generateSequence() {
    for (let i = 0; i < this.lengthSequence; i++) {
      this.compSequence.push(this.generateNumber(0,3))
    }
    console.log(this.compSequence)
  }

  computerMove() {
    this.compSequence.push(this.generateNumber(0,3))
    this.playerMove = true
    this.userSequence = []
  }

  async sequenceLoop() {
    for (const seq of this.compSequence) {
        setInterval(() => {
          this.compStyle = seq;
          // require view to be updated
          this.ref.markForCheck();
          console.log(this.compStyle)
        }, 5000);
      }
      
    }


  solutionCheck() {
    for (let j = 0; j < this.userSequence.length; j++) {
      if (this.compSequence[j] === this.userSequence[j]) {
        this.solved = true
      }
      else {
        this.solved = false
        this.userSequence = []
        this.compSequence = []
        this.generateSequence()
      }
    }

    if (this.compSequence.length === this.userSequence.length) {
      this.playerMove = false
    }

    if ((this.compSequence.length === this.userSequence.length) && (this.solved === true)) {
      this.computerMove()
    }

    this.sequenceLoop()
  }

  playerInput(clickedIndex: number) {
    this.userSequence.push(clickedIndex)
    this.solutionCheck()

    console.log(this.userSequence, this.compSequence)
  }

}
