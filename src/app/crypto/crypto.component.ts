import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var require: any;
var CanvasJS = require('../../assets/js/canvasjs.min');

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements AfterViewInit, OnInit {
  updateInterval = 10000;
  
  // initial value
  yPrice = null; 
  time = new Date();

  bitcoinPrice =[{x: this.time.getTime(), y: this.yPrice}]
 
  chart: any;
 
  chartOptions = {
    zoomEnabled: true,
    theme: "dark2",
    title: {
      text: "Bitcoin Price (USD)"
    },
    axisY:{
      prefix: "$"
    }, 
    toolTip: {
      shared: true
    },
    legend: {
      cursor:"pointer",
      verticalAlign: "top",
      fontSize: 22,
      fontColor: "dimGrey",
      itemclick : function(e:any) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        }
        else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      }
    },

    data: [{ 
      type: "line",
      xValueType: "dateTime",
      yValueFormatString: "$####.00",
      xValueFormatString: "hh:mm:ss TT",
      showInLegend: true,
      name: "BTC price",
      dataPoints: this.bitcoinPrice
    }]
  }


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.updateChart()
  }

  ngAfterViewInit() {
	  setInterval(() => {this.updateChart()}, this.updateInterval);	
  }

  getChartInstance(chart: object) {
    this.chart = chart;
    this.updateChart();
  }
 
  updateChart() {
    var t = new Date();
    this.http.get<any>('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd').subscribe(data => {
      this.yPrice = data.bitcoin.usd;
      console.log(this.bitcoinPrice)
    })

      this.bitcoinPrice.push({
        x: t.getTime(),
        y: this.yPrice
        });
     
    // updating legend text with updated with y Value 
    this.chart.options.data[0].legendText = " BTC price $" + CanvasJS.formatNumber(this.yPrice, "#,###.00");
    this.chart.render();
  }

} 