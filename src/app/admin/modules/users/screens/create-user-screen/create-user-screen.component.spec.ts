import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserScreenComponent } from './create-user-screen.component';

describe('CreateUserScreenComponent', () => {
  let component: CreateUserScreenComponent;
  let fixture: ComponentFixture<CreateUserScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
