import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';

const defaults = {
  delayEnter: '200ms',
  delayLeave: '0ms',
  timingEnter: '2s',
  timingLeave: '2s'
};


@Component({
  selector: 'app-simonsays',
  templateUrl: './simonsays.component.html',
  styleUrls: ['./simonsays.component.scss'],
  animations: [
      trigger('changeColor', [
        transition(':enter', [
          style({ background: "grey"}),
            animate('{{timingEnter}} {{delayEnter}} ease-in-out')
        ], { params: { delayEnter: defaults.delayEnter, timingEnter: defaults.timingEnter } })
    ])
  ]
})

export class SimonsaysComponent implements OnInit {

  displaySequence: Array<number> = [1,2,3,4]
  compSequence: Array<number> = [];
  userSequence: Array<number> = [];
  lengthSequence: number = 1;
  solved: Boolean = false;
  playerMove: Boolean = false;
  compStyle: number = -1;
  compStyle0: number = 0;

  constructor(private ref: ChangeDetectorRef) { }
  

  ngOnInit(): void {
    this.generateSequence()
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/simonsays/Laser.mp3";
    audio.load();
    audio.play();
  }

  generateNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  generateSequence() {
    for (let i = 0; i < this.lengthSequence; i++) {
      this.compSequence.push(this.generateNumber(0,3))
    }
    console.log(this.compSequence)
    this.sequenceLoop()
  }

  computerMove() {
    this.compSequence.push(this.generateNumber(0,3))
    this.compStyle0 = 1;
    console.log(this.compStyle0)
    this.ref.detectChanges();
    this.playerMove = true
    this.userSequence = []

  }

  setComp(seq: number){
    this.compStyle = seq;
  }

  sequenceLoop() {
    for (const seq of this.compSequence)  {
      this.setComp(seq)
      console.log("compstyle = " + this.compStyle)
      }
      // this.playAudio()  
      this.compStyle0 = 0;
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
      this.sequenceLoop()
    }


  }

  playerInput(clickedIndex: number) {
    this.compStyle = -1
    this.userSequence.push(clickedIndex)
    this.solutionCheck()
    console.log(this.userSequence, this.compSequence)
  }

}
