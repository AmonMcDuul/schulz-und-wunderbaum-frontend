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

  constructor (public dialog: MatDialog) {}

  matrix = [[0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]];
  turn = 1;
  winner = 0;
  diagonals = [[[0,0],[1,1],[2,2],[3,3],[4,4],[5,5]],
              [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]], 
              [[0,2],[1,3],[2,4],[3,5],[4,6]], 
              [[0,3],[1,4],[2,5],[3,6]],  
              [[1,0],[2,1],[3,2],[4,3],[5,4]],   
              [[2,0],[3,1],[4,2],[5,3]]];

  blockCol = -1;
  blockRow = -1;
  blockedV = [-1];
  blockedH = [-1];

  openAlertDialog(winner: string) {
    const dialogRef = this.dialog.open(GamedialogComponent,{
      data:{
        message: winner,
        buttonText: {
          cancel: 'Retry'
        }
      },
    });
  }

  winDialog() {
    if (this.winner === 1) {
      this.openAlertDialog("You're a winner!")
    }
    else if (this.winner === 2) {
      this.openAlertDialog("You're a loser!")
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
            console.log("hor win 1")
          }
          else if ((player === 2) && (horTotal === 8)) {
            this.winner = player
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
    var vertTotal = 0
    for (let j = 0; j < this.matrix.length + 1; j++) {
      for (let i = 0; i < this.matrix.length; i++) {
        if (this.matrix[i][j] === player) {
          vertTotal += this.matrix[i][j]
          if ((player === 1) && (vertTotal === 4)) {
            this.winner = player
            console.log("ver win 1")
          }
          else if ((player === 2) && (vertTotal === 8)) {
            this.winner = player
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
    for (let j = 0; j < this.diagonals.length; ++j) {
      let diagTotal = 0
      let diagonal = this.diagonals[j]
      diagonal.forEach(diag => {
        let value = this.matrix[diag[0]][diag[1]]
        if (value === player) {
          diagTotal += value
          if ((player === 1) && (diagTotal === 4)) {
            this.winner = player
            console.log("diag win 1")
          }
          else if ((player === 2) && (diagTotal === 8)) {
            this.winner = player
            console.log("diag win 1")
          }
        }
        else {
          diagTotal = 0
        } 
      })
    }

    // reverse diagonal check
    for (let j = 0; j < this.diagonals.length; ++j) {
      let diagTotalR = 0
      let diagonalRev = this.diagonals[j].reverse()
      diagonalRev.forEach(diagR => {
        let valueR = this.matrix[diagR[0]][diagR[1]]
        if (valueR === player) {
          diagTotalR += valueR
          if ((player === 1) && (diagTotalR === 4)) {
            this.winner = player
          }
          else if ((player === 2) && (diagTotalR === 8)) {
            this.winner = player
          }
        }
        else {
          diagTotalR = 0
        } 
      })
    }
  }

  makeMove(row: number, col: number) {
    for (let j = this.matrix.length - 1; j >= 0; j--) {
      if (this.matrix[j][col] === 0) {
        this.matrix[j][col] = 1
        this.turn = 0
        this.winCheck(1)
        this.computerMove()
        this.winCheck(2)
        this.winDialog()
        break;
      }
    }
  }

  computerMove() {
    if (this.blockCol !== -1) {
      for (let j = this.matrix.length - 1; j >= 0; j--) {
        if (this.matrix[j][this.blockCol] === 0) {
            this.matrix[j][this.blockCol] = 2
            this.blockCol = -1
            break
        }
      }
    }
    else if (this.blockRow !== -1) {
      for (let j = this.matrix.length; j >= 0; j--) {
        if (this.matrix[this.blockRow][j] === 0) {
            this.matrix[this.blockRow][j] = 2
            this.blockRow = -1
            break
        }
      }
    }
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

  ngOnInit(): void {
  }

}
