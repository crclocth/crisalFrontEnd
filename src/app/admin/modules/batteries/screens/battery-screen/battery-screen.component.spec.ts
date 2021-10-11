import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryScreenComponent } from './battery-screen.component';

describe('BatteryScreenComponent', () => {
  let component: BatteryScreenComponent;
  let fixture: ComponentFixture<BatteryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteryScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
