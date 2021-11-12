import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryScreenComponent } from './laboratory-screen.component';

describe('LaboratoryScreenComponent', () => {
  let component: LaboratoryScreenComponent;
  let fixture: ComponentFixture<LaboratoryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratoryScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
