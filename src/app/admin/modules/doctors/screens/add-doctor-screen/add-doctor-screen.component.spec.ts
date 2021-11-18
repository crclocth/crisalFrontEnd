import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoctorScreenComponent } from './add-doctor-screen.component';

describe('AddDoctorScreenComponent', () => {
  let component: AddDoctorScreenComponent;
  let fixture: ComponentFixture<AddDoctorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDoctorScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoctorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
