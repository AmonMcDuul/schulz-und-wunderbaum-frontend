import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestcalcComponent } from './testcalc/testcalc.component';

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
      width: '250px',
    });

    //result is voor eventuele parameter bladiebla
    //jan willem is een mafkees
    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed');
    });
  }

}
