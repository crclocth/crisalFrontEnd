import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryExamsComponent } from './laboratory-exams.component';

describe('LaboratoryExamsComponent', () => {
  let component: LaboratoryExamsComponent;
  let fixture: ComponentFixture<LaboratoryExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratoryExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
