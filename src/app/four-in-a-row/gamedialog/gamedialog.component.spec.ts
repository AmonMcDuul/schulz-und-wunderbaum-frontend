import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamedialogComponent } from './gamedialog.component';

describe('GamedialogComponent', () => {
  let component: GamedialogComponent;
  let fixture: ComponentFixture<GamedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamedialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
