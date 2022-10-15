import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Player } from 'src/app/models/drugwars/player';

@Component({
  selector: 'app-startgame',
  templateUrl: './startgame.component.html',
  styleUrls: ['./startgame.component.scss']
})
export class StartGameComponent implements OnInit {

  playerForm: FormGroup;
  gameModes: string[];

  constructor(
    public dialogRef: MatDialogRef<StartGameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder: FormBuilder
  ) {
    this.playerForm = this.formBuilder.group({
      name: new FormControl(),
      age: new FormControl(),
      gameMode: new FormControl(),      
    });
    this.gameModes = ['30','60','90','120'];
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onClick(): void {
    let player: Player = {
      name: this.playerForm.get("name")?.value,
      age: this.playerForm.get("age")?.value,
      gameMode: this.playerForm.get("gameMode")?.value,
      creationDate: new Date(),
    }
    console.log(player)
    this.dialogRef.close(player);
  }
}