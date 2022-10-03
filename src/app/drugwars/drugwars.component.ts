import { Component, OnInit } from '@angular/core';
import { DrugWarsService } from '../services/drugwars.service';

import { Armor } from '../models/drugwars/armor';
import { Drug } from '../models/drugwars/drug';
import { HighScore } from '../models/drugwars/highscore';
import { Item } from '../models/drugwars/item';
import { Locations } from '../models/drugwars/locations';
import { Weapon } from '../models/drugwars/weapon';

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

  constructor(private api: DrugWarsService) { }

  ngOnInit(): void {
    this.seedData()
  }

  seedData() {
     
      if(this.armors.length == 0){
        this.armors = [{id: 1, name: "Shield", description: "A simple shield", defense: 10},
                        {id: 2, name: "BetterShield", description: "A better shield", defense: 25},
                        {id: 3, name: "SuperShield", description: "A super shield", defense: 50}]
      }
      this.api.getDrugs().subscribe((data) => {
        this.drugs = data;
      })
      this.api.getHighScores().subscribe((data) => {
        this.highscores = data;
      })
      this.api.getItems().subscribe((data) => {
        this.items = data;
      })
      this.api.getLocations().subscribe((data) => {
        this.locations = data;
      })
      this.api.getWeapons().subscribe((data) => {
        this.weapons = data;
      })
    }

}
