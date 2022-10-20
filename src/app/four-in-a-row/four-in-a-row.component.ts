import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GamedialogComponent } from './gamedialog/gamedialog.component';

// TODO:
// computer altijd een zet
// diagonal en vertical winCheck - tweaken

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
            [0,0,0,0,0,0,0]];
  turn = 1;
  winner = 0;
  blockCol = -1;
  blockRow = -1;
  blockedV = [-1];
  blockedH = [-1];

  constructor (public dialog: MatDialog) {}
  
  ngOnInit(): void {
  }

  openAlertDialog(winner: string) {
    this.dialog.open(GamedialogComponent, {
      data: {
        message: winner,
        buttonText: {
          cancel: 'Retry'
        }
      },
    })
  }

  winDialog() {
    switch (this.winner) {
      case 1: 
        this.openAlertDialog("You're a winner!")
        setTimeout(() => {this.resetGame()}, 10000)
        break
      case 2:
        this.openAlertDialog("You're a loser!")
        setTimeout(() => {this.resetGame()}, 10000)
        break
    }  
  }

  winCheck(player: number) {
    // horizontal check
    var horTotal = 0
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix.length + 1; j++) {
        if (this.matrix[i][j] === player) {
          horTotal += this.matrix[i][j]
          if ((player === 1) && (horTotal === 4)) {
            this.winner = player
            horTotal = 0
            console.log("hor win 1")
          }
          else if ((player === 2) && (horTotal === 8)) {
            this.winner = player
            horTotal = 0
            console.log("hor win 2")
          }
          if ((horTotal === 3) && !(this.blockedH.includes(i))) {
            this.blockRow = i
            this.blockedH.push(i)
          }
        }
        else {
          horTotal = 0
        }
      }
    }
    
    // vertical check
    for (let j = 0; j < this.matrix.length + 1; j++) {
      var vertTotal = 0
      for (let i = 0; i < this.matrix.length; i++) {
        if (this.matrix[i][j] === player) {
          vertTotal += this.matrix[i][j]
          if ((player === 1) && (vertTotal === 4)) {
            this.winner = player
            vertTotal = 0
            console.log("ver win 1")
          }
          else if ((player === 2) && (vertTotal === 8)) {
            this.winner = player
            vertTotal = 0
            console.log("ver win 2")
          }
          if ((vertTotal === 3) && !(this.blockedV.includes(j))) {
            this.blockCol = j
            this.blockedV.push(j)
          }
        }
        else {
          vertTotal = 0
        }
      }
    }

    // diagonal check
    for (let k = 0 ; k <= 6 + 7 - 2; k++) {
      let diagTotal = 0
      for (let j = 0 ; j <= k ; j++) {
          let i = k - j;
          if( i < 6 && j < 7 ) {
              let value = this.matrix[i][j]
              if (value === player) {
                diagTotal += value
                if ((player === 1) && (diagTotal === 4)) {
                  this.winner = player
                  console.log("diag win 1")
                  diagTotal = 0
                }
                else if ((player === 2) && (diagTotal === 8)) {
                  this.winner = player
                  console.log("diag win 1")
                  diagTotal = 0
                }
              }
              else {
                diagTotal = 0
              } 
          }
      }
    }
  }

  makeMove(row: number, col: number) {
    for (let j = this.matrix.length - 1; j >= 0; j--) {
      if (this.matrix[j][col] === 0) {
        this.matrix[j][col] = 1
        this.turn = 0
        this.winCheck(1)
        if (this.winner === 0) {
          this.computerMove()
          this.winCheck(2)
        }
        this.winDialog()
        break;
      }
    }
  }

  resetGame () {
    console.log("reset")
    this.matrix = [[0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0]];
    this.turn = 1;
    this.winner = 0;
    this.blockCol = -1;
    this.blockRow = -1;
    this.blockedV = [-1];
    this.blockedH = [-1];
  }

  computerMove() {
    if (this.blockCol !== -1) {
      for (let i = this.matrix.length - 1; i >= 0; i--) {
        if (this.matrix[i][this.blockCol] === 0) {
            this.matrix[i][this.blockCol] = 2
            this.blockCol = -1
            break
        }
      }
    }
    // else if (this.blockRow !== -1) {
    //   for (let j = this.matrix.length; j >= 0; j--) {
    //     if (this.matrix[this.blockRow][j] === 0) {
    //         this.matrix[this.blockRow][j] = 2
    //         this.blockRow = -1
    //         break
    //     }
    //   }
    // }
    else {
      let randomCol = Math.floor(Math.random() * 7)
      for (let j = this.matrix.length - 1; j >= 0; j--) {
        if (this.matrix[j][randomCol] === 0) {
          this.matrix[j][randomCol] = 2
          break
        }
      }
    }
  }

}