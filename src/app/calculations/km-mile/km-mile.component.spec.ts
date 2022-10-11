import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmMileComponent } from './km-mile.component';

describe('KmMileComponent', () => {
  let component: KmMileComponent;
  let fixture: ComponentFixture<KmMileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KmMileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KmMileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
