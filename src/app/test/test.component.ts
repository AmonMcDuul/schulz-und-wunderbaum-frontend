import { Component, OnInit } from '@angular/core';
import { JdoodleService } from '../services/jdoodle.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  constructor(private script: JdoodleService) { }

  ngOnInit(): void {
    this.loadScript();
  }

  loadScript() {
    this.script.load('filepicker').then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));
  }
}