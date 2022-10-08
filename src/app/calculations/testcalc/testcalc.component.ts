import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-testcalc',
  templateUrl: './testcalc.component.html',
  styleUrls: ['./testcalc.component.scss']
})

export class TestcalcComponent implements OnInit {
  numbersFilled = false;
  fibonacciForm: FormGroup;
  result: number = 0;

  constructor(public formBuilder: FormBuilder,) {
    this.fibonacciForm = this.formBuilder.group({
      input: new FormControl(),
      
    });
    
  }

  ngOnInit(): void {}

  numberToCalculate(){
    this.numbersFilled = true;
    var input = this.fibonacciForm.get("input")?.value;
    this.result = this.fibonacci(input);
  }

  fibonacci(input: number, memo: any = {}){
      if (memo[input]) return memo[input];
      if (input <= 2) return 1;
    
      memo[input] = this.fibonacci(input - 1, memo) + this.fibonacci(input - 2, memo);
      return memo[input];
    }
    
}