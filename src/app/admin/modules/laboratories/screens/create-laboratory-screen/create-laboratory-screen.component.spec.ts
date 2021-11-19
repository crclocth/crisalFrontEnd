import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLaboratoryScreenComponent } from './create-laboratory-screen.component';

describe('CreateLaboratoryScreenComponent', () => {
  let component: CreateLaboratoryScreenComponent;
  let fixture: ComponentFixture<CreateLaboratoryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLaboratoryScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLaboratoryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
