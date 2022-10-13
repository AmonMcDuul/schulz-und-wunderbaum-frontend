import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-km-mile',
  templateUrl: './km-mile.component.html',
  styleUrls: ['./km-mile.component.scss']
})

export class KmMileComponent implements OnInit {
  numbersFilled = false;
  kmMile = true;
  kmMileForm: FormGroup;
  result: number = 0;

  constructor(public formBuilder: FormBuilder) {
    this.kmMileForm = this.formBuilder.group({
      input: new FormControl(),      
    });
  }

  ngOnInit(): void {}

  calculateKmMile(){
    this.numbersFilled = true;
    var input = this.kmMileForm.get("input")?.value;
    if(this.kmMile){
      this.result = input * 0.6213711922;
    } else {
      this.result = input / 0.6213711922;
    }
  }    
}