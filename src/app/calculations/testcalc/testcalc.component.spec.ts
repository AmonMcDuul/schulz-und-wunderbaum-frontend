import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcalcComponent } from './testcalc.component';

describe('TestcalcComponent', () => {
  let component: TestcalcComponent;
  let fixture: ComponentFixture<TestcalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
