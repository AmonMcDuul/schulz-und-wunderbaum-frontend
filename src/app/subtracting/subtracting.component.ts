import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './subtracting.component.html',
  styleUrls: ['./subtracting.component.scss']
})

// let itemIndex = this.items.findIndex(item => item.id == retrievedItem.id);
// this.items[itemIndex] = retrievedItem;

export class SubtractingComponent {

  grid =  [
    {id: 0, name:'Piemletje'},
    {id: 1, name:'Pammeltje'},
    {id: 2, name:'Pommetltje'},
    {id: 3, name:'Giojerrtij'},
    {id: 4, name:'rgokpw@23'},  
    {id: 5, name:'EMPTY'},
    {id: 6, name:'Sevensen'},
    {id: 7, name:'r@Eight'},
    {id: 8, name:'Nein! Nein! Nein'}
  ];

  previousClick: number = 999;


  getAdjacentTiles(idx: number) {
    var below = ((idx + 3) < 9) ? (idx + 3) : -1;
    var up = ((idx - 3) > -1) ? (idx - 3) : -1;
    var right = (((idx + 1) % 3) > 0) ? (idx + 1) : -1;
    var left = ((idx % 3) != 0) ? (idx - 1) : -1;
    return [up, below, right, left];
  }

  onClick(g: any, i: number) {
    console.log("clicked" + g.name);
    let adjacentArray = this.getAdjacentTiles(i);
    let emptyObject= this.grid.find(o => o.name === 'EMPTY') || {id: -1};
    console.log(adjacentArray)

    if (g.name !== 'EMPTY') {
      for (let j = 0; j < adjacentArray.length; j++) {
        let adjIndex = adjacentArray[j];
        let emptyIndex = emptyObject.id
        if (adjIndex === emptyIndex) {
          this.grid[emptyIndex].name = this.grid[i].name 
          this.grid[i].name = 'EMPTY'
          console.log(adjIndex);
          }
        }
    }
    
  }


}


