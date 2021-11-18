import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDoctorScreenComponent } from './list-doctor-screen.component';

describe('ListDoctorScreenComponent', () => {
  let component: ListDoctorScreenComponent;
  let fixture: ComponentFixture<ListDoctorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDoctorScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDoctorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
