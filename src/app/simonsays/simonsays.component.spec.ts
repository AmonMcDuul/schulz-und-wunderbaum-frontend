import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimonsaysComponent } from './simonsays.component';

describe('SimonsaysComponent', () => {
  let component: SimonsaysComponent;
  let fixture: ComponentFixture<SimonsaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimonsaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimonsaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
