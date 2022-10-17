import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './subtracting.component.html',
  styleUrls: ['./subtracting.component.scss'],
  animations: [
    trigger('slideLeftRight', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('200ms ease-in-out', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('slideRightLeft', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('200ms ease-in-out', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({transform: 'translateX(-100%)'}))
      ])
    ]),
    trigger('slideUpDown', [
      transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('200ms ease-in-out', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({transform: 'translateY(-100%)'}))
      ])
    ]),
    trigger('slideDownUp', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in-out', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({transform: 'translateY(100%)'}))
      ])
    ])
  ]
})

export class SubtractingComponent implements OnInit {

  grid =  [
    {id: 0, name:'EMPTY'},
    {id: 1, name:'img3'},
    {id: 2, name:'img1'},
    {id: 3, name:'img2'},
    {id: 4, name:'img6'},  
    {id: 5, name:'img7'},
    {id: 6, name:'img4'},
    {id: 7, name:'img5'},
    {id: 8, name:'img8'}
  ];

  solved = false;
  timeLeft: number = 100;
  subscribeTimer: any;
  score = 0;
  clicked = -1;
  states = [false, false, false, false];


  observableTimer() {
      const source = timer(1000, 2000);
      const abc = source.subscribe(val => {
        console.log(val, '-');
        this.subscribeTimer = this.timeLeft - val;
      });
    }


  getAdjacentTiles(idx: number) {
    var below = ((idx + 3) < 9) ? (idx + 3) : -1;
    var up = ((idx - 3) > -1) ? (idx - 3) : -1;
    var right = (((idx + 1) % 3) > 0) ? (idx + 1) : -1;
    var left = ((idx % 3) != 0) ? (idx - 1) : -1;
    return [up, below, right, left];
  }

  solveCheck() {
    for (let j = 0; j < this.grid.length; j++) {
      let imgName =  this.grid[j].name
      if (imgName != 'EMPTY' && imgName.slice(-1) != String(j)) {
        return false
      }
    }
    return true
  }

  onClick(g: any, i: number) {
    let adjacentArray = this.getAdjacentTiles(i);
    let emptyObject= this.grid.find(o => o.name === 'EMPTY') || {id: -1};
    this.clicked = -1
    if (g.name !== 'EMPTY') {
      for (let j = 0; j < adjacentArray.length; j++) {
        let adjIndex = adjacentArray[j];
        let emptyIndex = emptyObject.id
        if (adjIndex === emptyIndex) {
          this.grid[emptyIndex].name = this.grid[i].name;
          this.grid[i].name = 'EMPTY';
          this.clicked = emptyIndex
        }
        if ((this.clicked - i) == 1) {
          this.states = [true, false, false, false]
        }
  
        else if ((this.clicked - i) == -1) {
          this.states = [false, true, false, false]
        }  
  
        else if ((this.clicked - i) < -1) {
          this.states = [false, false, true, false]
        } 

        else if ((this.clicked - i) > 1) {
          this.states = [false, false, false, true]
        } 
      }
    }

    if (this.solveCheck()) {
      console.log("solved")
      this.solved = true
      this.score = this.timeLeft - this.subscribeTimer
    }
    
  }

  ngOnInit(): void {
    this.observableTimer()
    this.states = [false, false, false, false]
  }
}


