import { Component, OnInit } from '@angular/core';
import { DrugWarsService } from '../services/drugwars.service';

import { Armor } from '../models/drugwars/armor';
import { Drug } from '../models/drugwars/drug';
import { HighScore } from '../models/drugwars/highscore';
import { Item } from '../models/drugwars/item';
import { Locations } from '../models/drugwars/locations';
import { Weapon } from '../models/drugwars/weapon';
import { Seeding } from './seeding';
import { StartGameComponent } from './startgame/startgame.component';
import { MatDialog } from '@angular/material/dialog';
import { Player } from '../models/drugwars/player';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';



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

  //player data and gamemode
  player: any;
  day: number = 0;
  dayMultiplyer: number = 0;

  //globals?
  inventory: number = 0;
  maxInventory: number = 100;
  bankAccount: number = 0;
  weapon: string = "None";
  armor: string = "None";
  jacket: string = "None";
  loan: number = 200;

  //Progressbar
  color: ThemePalette = 'accent';
  mode: ProgressBarMode = 'determinate';
  value: number = 0;

  //inventory
  displayedColumns: string[] = ['name', 'price', 'quantity'];
  dataSource: Drug[] = [];
  
  constructor(private api: DrugWarsService, private seed: Seeding, public dialog: MatDialog) {
    this.bankAccount = this.bankAccount + this.loan
   }

  ngOnInit(): void {
    console.log(this.seed.seedDrugs())
    this.seedData()
    this.dataSource = this.drugs;
    console.log(this.dataSource);
  }


  openStartGameDialog(): void {
    const dialogRef = this.dialog.open(StartGameComponent, {
      width: '250px',
      data: {player: this.player},
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed');
      console.log(result)
      this.player = result;
      this.dayMultiplyer = 100 / this.player.gameMode
    });
  }

  nextDay(): void {
    this.day++;
    this.value = this.day * this.dayMultiplyer
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
