import { Component, OnInit } from '@angular/core';


// TODO:
// fix vertical winCheck
// diagnoal winCheck
// popup when you win or lose
// better AI - block 3 possible win


@Component({
  selector: 'app-four-in-a-row',
  templateUrl: './four-in-a-row.component.html',
  styleUrls: ['./four-in-a-row.component.scss']
})
export class FourInARowComponent implements OnInit {

  matrix = [[0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]]
  turn = 1;
  winner = 0
  

  winCheck() {
    // horizontal check
    for (let i = 0; i < this.matrix.length; i++) {
      for (let s = 0; s < this.matrix.length - 2; s++) {
        if (this.matrix[i].slice(s, (s+4)).filter(x => x === 1).length === 4) {
          this.winner = 1
        }
      }
    }
    
    // vertical check
    let vertTotal = 0
    let chain = false

    for (let j = this.matrix.length; j >= 0; j--) {
      for (let i = 0; i < this.matrix.length; i++) {
        if (this.matrix[i][j] === 1) {
          vertTotal += this.matrix[i][j]
          chain = true
          console.log(this.matrix[i][j], i, j, vertTotal)
        }
        else if ((chain === true) && (this.matrix[i][j] !== 1)) {
          break
        }
      }

    if (vertTotal === 4) {
      this.winner = 1
      }

    }

    // diagonal check\
    // code
  
  }

  makeMove(row: number, col: number) {
    for (let j = this.matrix.length - 1; j >= 0; j--) {
      if (this.matrix[j][col] === 0) {
        this.matrix[j][col] = 1
        this.turn = 0
        this.winCheck()
        this.computerMove()
        break;
      }
    }
  }

  computerMove() {
    let randomCol = Math.floor(Math.random() * (6 - 0 + 1))
    for (let j = this.matrix.length - 1 ; j >= 0; j--) {
      if (this.matrix[j][randomCol] === 0) {
        this.matrix[j][randomCol] = 2
        break
      }
    }
  }

  ngOnInit(): void {
  }

}
