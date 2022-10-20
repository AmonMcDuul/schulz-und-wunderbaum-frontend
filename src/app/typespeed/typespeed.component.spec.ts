import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypespeedComponent } from './typespeed.component';

describe('TypespeedComponent', () => {
  let component: TypespeedComponent;
  let fixture: ComponentFixture<TypespeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypespeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypespeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
