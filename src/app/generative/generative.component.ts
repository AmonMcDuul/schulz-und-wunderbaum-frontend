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
   
constructor() { }

ngAfterViewInit() {
  this.canvas = this.myCanvas.nativeElement;
  this.context = this.canvas.getContext('2d');
  this.drawCanvas();
}

drawCanvas() {
    this.canvas.width = this.size * this.dpr;
    this.canvas.height = this.size * this.dpr;
    this.context.scale(this.dpr, this.dpr);

    this.context.lineWidth = 1;
    this.context.lineCap = 'square';
    this.context.lineJoin = 'square';

    const gradient = this.context.createLinearGradient(20,11,20,30);
    gradient.addColorStop(0, "black");
    gradient.addColorStop(1, "black");
    this.context.strokeStyle = gradient;
    
    var step = 35;

    for (var y = step; y < this.size - step; y += step) {
      for (var x = step; x < this.size - step; x+= step) {
          this.draw(x, y, step, step);      
      }
  }
}

CalcSineY(x: number, h: number) {
	return h - h * Math.sin( x * 2 * Math.PI * (1/60));
}

draw(x: number, y: number, width: number, height: number) {
  this.context.save();
  this.context.translate(x + width/2, y + height/2);
  this.context.rotate(Math.random() * 50);
  this.context.translate(-width/2, -height/2);
  
  for(var i = 0; i <= 70; i++) {
    this.context.beginPath();
    this.context.moveTo(Math.random()*i, 0);
    this.context.lineTo(0, this.CalcSineY(6, 100));
    this.context.stroke();
  }

  this.context.restore();
}
  

}
