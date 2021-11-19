import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserScreenComponent } from './list-user-screen.component';

describe('ListUserScreenComponent', () => {
  let component: ListUserScreenComponent;
  let fixture: ComponentFixture<ListUserScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
