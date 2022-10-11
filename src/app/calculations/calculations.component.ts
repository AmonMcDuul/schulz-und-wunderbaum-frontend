import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KmMileComponent } from './km-mile/km-mile.component';
import { TestcalcComponent } from './testcalc/testcalc.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openTestCalcDialog(): void {
    const dialogRef = this.dialog.open(TestcalcComponent, {
      panelClass: 'custom-dialog-container' });
    //result is voor eventuele parameter bladiebla
    //jan willem is een mafkees
    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed');
    });
  }

  openKmMileDialog(): void {
    const dialogRef = this.dialog.open(KmMileComponent, {
      panelClass: 'custom-dialog-container' });
    //result is voor eventuele parameter bladiebla
    //jan willem is echt een mafkees, geen grapjes.
    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed');
    });
  }

  openWeatherDialog(): void {
    const dialogRef = this.dialog.open(WeatherAppComponent, {
      panelClass: 'custom-dialog-container' });
    //result is voor eventuele parameter bladiebla
    //jan willem is echt een mafkees, geen grapjes, serieus nie..
    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed');
    });
  }

}
