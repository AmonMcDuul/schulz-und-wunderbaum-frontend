import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugwarsComponent } from './drugwars.component';

describe('DrugwarsComponent', () => {
  let component: DrugwarsComponent;
  let fixture: ComponentFixture<DrugwarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugwarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrugwarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
