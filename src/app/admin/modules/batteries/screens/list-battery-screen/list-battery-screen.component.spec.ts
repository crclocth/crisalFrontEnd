import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBatteryScreenComponent } from './list-battery-screen.component';

describe('ListBatteryScreenComponent', () => {
  let component: ListBatteryScreenComponent;
  let fixture: ComponentFixture<ListBatteryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBatteryScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBatteryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
