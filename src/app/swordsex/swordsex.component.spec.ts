import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwordsexComponent } from './swordsex.component';

describe('SwordsexComponent', () => {
  let component: SwordsexComponent;
  let fixture: ComponentFixture<SwordsexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwordsexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwordsexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
