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

  bitcoinPrice = [{x: Date.now(), y: null}];
  histPrices: any;

  chart: any;
 
  chartOptions = {
    zoomEnabled: true,
    theme: "dark2",
    title: {
      text: "Bitcoin Price (USD)"
    },
    axisY:{
      prefix: "$",
      gridThickness: 0,
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
      // type: "splineArea",
      color: "lightgrey",
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
    this.initiateData()
    this.updateChart()
  }

  ngAfterViewInit() {
	  setInterval(() => {this.updateChart()}, this.updateInterval);	
  }

  parsePrices() {
    for (let i = 0; i < this.histPrices.length; i++) {
      var x = this.histPrices[i][0]
      var y = this.histPrices[i][1]
      this.bitcoinPrice.push({x,y});
    }

  }

  initiateData() {
    this.http.get<any>('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1').subscribe(data => {
      this.histPrices = data.prices;
      this.parsePrices()
    })
  }

  getChartInstance(chart: object) {
    this.chart = chart;
    this.updateChart();
  }
 
  getLastData() {
    var t = new Date();
    this.http.get<any>('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd').subscribe(data => {
      this.yPrice = data.bitcoin.usd;
    })

      this.bitcoinPrice.push({
        x: t.getTime(),
        y: this.yPrice
        });
    }


  formatChart() {
     
    this.chart.options.data[0].legendText = " BTC price $" + CanvasJS.formatNumber(this.yPrice, "#,###.00");
    this.chart.render();
  }

  updateChart(){
    this.getLastData()
    this.formatChart()
  }

} 