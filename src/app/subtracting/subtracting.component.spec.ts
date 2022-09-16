import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractingComponent } from './subtracting.component';

describe('SubtractingComponent', () => {
  let component: SubtractingComponent;
  let fixture: ComponentFixture<SubtractingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtractingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtractingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
