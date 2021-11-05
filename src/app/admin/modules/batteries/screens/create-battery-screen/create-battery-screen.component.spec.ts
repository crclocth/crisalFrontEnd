import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBatteryScreenComponent } from './create-battery-screen.component';

describe('CreateBatteryScreenComponent', () => {
  let component: CreateBatteryScreenComponent;
  let fixture: ComponentFixture<CreateBatteryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBatteryScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBatteryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
