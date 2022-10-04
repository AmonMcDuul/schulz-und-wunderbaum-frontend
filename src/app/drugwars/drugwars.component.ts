import { Component, OnInit } from '@angular/core';
import { DrugWarsService } from '../services/drugwars.service';

import { Armor } from '../models/drugwars/armor';
import { Drug } from '../models/drugwars/drug';
import { HighScore } from '../models/drugwars/highscore';
import { Item } from '../models/drugwars/item';
import { Locations } from '../models/drugwars/locations';
import { Weapon } from '../models/drugwars/weapon';
import { Seeding } from './seeding';
import { StartgameComponent } from './startgame/startgame.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-drugwars',
  templateUrl: './drugwars.component.html',
  styleUrls: ['./drugwars.component.scss']
})
export class DrugwarsComponent implements OnInit {
  armors: Armor[] = [];
  drugs: Drug[] = [];
  highscores: HighScore[] = [];
  items: Item[] = [];
  locations: Locations[] = [];
  weapons: Weapon[] = [];

  playerName: string = "";

  constructor(private api: DrugWarsService, private seed: Seeding, public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.seed.seedDrugs())
    this.seedData()
  }


  openStartGameDialog(): void {
    const dialogRef = this.dialog.open(StartgameComponent, {
      width: '250px',
      data: {playerName: this.playerName},
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed');
      this.playerName = result;
    });
  }


  seedData() {
      this.api.getArmor().subscribe((data) => {
        this.armors = data;
      })
      if(this.armors.length == 0){
        this.armors = this.seed.seedArmor();
      }
      this.api.getDrugs().subscribe((data) => {
        this.drugs = data;
      })
      if(this.drugs.length == 0){
        this.drugs = this.seed.seedDrugs();
      }
      this.api.getHighScores().subscribe((data) => {
        this.highscores = data;
      })
      if(this.highscores.length == 0){
        this.highscores = this.seed.seedHighScores();
      }
      this.api.getItems().subscribe((data) => {
        this.items = data;
      })
      if(this.items.length == 0){
        this.items = this.seed.seedItems();
      }
      this.api.getLocations().subscribe((data) => {
        this.locations = data;
      })
      if(this.locations.length == 0){
        this.locations = this.seed.seedLocations();
      }
      this.api.getWeapons().subscribe((data) => {
        this.weapons = data;
      })
      if(this.weapons.length == 0){
        this.weapons = this.seed.seedWeapons();
      }
    }

}
