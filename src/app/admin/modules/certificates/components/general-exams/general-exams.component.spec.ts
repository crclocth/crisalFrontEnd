import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralExamsComponent } from './general-exams.component';

describe('GeneralExamsComponent', () => {
  let component: GeneralExamsComponent;
  let fixture: ComponentFixture<GeneralExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
