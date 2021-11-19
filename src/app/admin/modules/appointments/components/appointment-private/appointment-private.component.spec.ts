import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentPrivateComponent } from './appointment-private.component';

describe('AppointmentPrivateComponent', () => {
  let component: AppointmentPrivateComponent;
  let fixture: ComponentFixture<AppointmentPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentPrivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
