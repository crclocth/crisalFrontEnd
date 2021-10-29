import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeeScreenComponent } from './list-employee-screen.component';

describe('ListEmployeeScreenComponent', () => {
  let component: ListEmployeeScreenComponent;
  let fixture: ComponentFixture<ListEmployeeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployeeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
