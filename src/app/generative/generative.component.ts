import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-generative',
  templateUrl: './generative.component.html',
  styleUrls: ['./generative.component.scss']
})
export class GenerativeComponent implements AfterViewInit  {

@ViewChild('myCanvas') myCanvas!: ElementRef;

size: number = 600;
dpr: number = window.devicePixelRatio;
private canvas: any;
private context: any;
slidervalue: number = 2;
   
constructor() { }

ngAfterViewInit() {
  this.canvas = this.myCanvas.nativeElement;
  this.context = this.canvas.getContext('2d');
  this.drawCanvas();
}

clearCanvas() {
  this.canvas.width+=0;
  this.ngAfterViewInit();
}

repeat() {
  window.requestAnimationFrame(() => this.drawCanvas())
}

drawCanvas() {
    this.canvas.width = this.size * this.dpr;
    this.canvas.height = this.size * this.dpr;
    this.context.scale(this.dpr, this.dpr);

    this.context.lineWidth = 2;
    
    var step = 14;
    var lines = [];

    for(var i = step; i <= this.size - step; i += step) {
      var line = [];
      for(var j = step; j <= this.size - step; j+= step) {
        var distanceToCenter = Math.abs(j - this.size / 2);
        var variance = Math.max(this.size / 2 - 100 - distanceToCenter, 0);
        var random = Math.random() * variance / this.slidervalue * -1;
        var point = {x: j, y: i + random};
        line.push(point);
      } 
      lines.push(line);
    }

    // draw
    for(var i = 5; i < lines.length; i++) {

      this.context.beginPath();
      this.context.moveTo(lines[i][0].x, lines[i][0].y);

      for(var j = 0; j < lines[i].length - 2; j++) {
        var xc = (lines[i][j].x + lines[i][j + 1].x) / 2;
        var yc = (lines[i][j].y + lines[i][j + 1].y) / 2;
        this.context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, xc, yc);
      }
    
      this.context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, lines[i][j + 1].x, lines[i][j + 1].y);

      this.context.save();
      this.context.globalCompositeOperation = 'destination-out';
      this.context.fill();
      this.context.restore();
      this.context.stroke();
    }

    window.setTimeout(() => {this.repeat()}, 7000)
}

}
