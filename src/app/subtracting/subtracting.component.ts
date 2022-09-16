import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './subtracting.component.html',
  styleUrls: ['./subtracting.component.scss']
})

export class SubtractingComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'Gay', done: true },
    { description: 'Nerd', done: false },
    { description: 'Goobers batsen geven', done: false },
    { description: 'Bitches & hoes', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

}