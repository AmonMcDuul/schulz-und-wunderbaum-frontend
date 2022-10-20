import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Subject, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-typespeed',
  templateUrl: './typespeed.component.html',
  styleUrls: ['./typespeed.component.scss']
})
export class TypespeedComponent implements OnInit {

  prompt: string = 'Piemeltje pammeletje pommeletje er was eens een klein jongetje, dat jongetje heette Joran. Hij was de lelijkste jongen in het land. Snel, typ nou maar door, anders word je ook zo lelijk hoor.';
  text: string = '';
  textLength: number = 0;
  equalCheck: string = 'equal';
  timeLeft: number = 60;
  subscribeTimer: any;
  firstKey: Boolean = false;
  done: Boolean = false;
  wpmResult: number = 0;
  subject = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  observableTimer() {
    const source = timer(0, 1000).pipe(takeUntil(this.subject));
    const abc = source.subscribe(val => {
      this.subscribeTimer = this.timeLeft - val;
      console.log(this.subscribeTimer , '-')
      this.doneCheck();
    });
  }


  equalTest(){
    if (this.text === this.prompt.slice(0, this.textLength)) {
      return 'equal'
    }
    else {
      return 'notequal'
    }
  }

  wpmCalc() {
    if (this.done === true) {
      let wordCount = this.prompt.split(" ").length
      this.wpmResult = Math.round(wordCount/((60-this.subscribeTimer)/60))
      console.log("wpm" + this.wpmResult)
    }
  }

  doneCheck() {
    if ((this.text.length === this.prompt.length) || (this.subscribeTimer === 0)) {
      this.done = true
      this.wpmCalc()
      this.subject.next(1)
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent (event: KeyboardEvent) {
    if (this.firstKey === false) {
      this.observableTimer()
      this.firstKey = true
    }
    if (/^[a-zA-Z ,.]+$/.test(event.key)) {
      this.text += event.key
      this.textLength= this.text.length
      this.equalCheck = this.equalTest()
    }
  }

  @HostListener('document:keydown.backspace', ['$event'])
  handleBackSpaceEvent (event: KeyboardEvent) {
    this.text = this.text.slice(0,-1) 
  }

}
